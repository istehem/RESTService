from flask import abort, render_template
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse

from subprocess import *

from backend import *

basepath='/api/v1/'

client = Client()

class Status(restful.Resource):
    def get(self):
        return {'status': client.getstatus()}

class Version(restful.Resource):
    def get(self):
        return {'mpd_version': client.version()}

class Currentsong(restful.Resource):
    def get(self):
        return {'current_song' : client.getcurrentsong()}

class Playlist(restful.Resource):
    def get(self):
        return {'playlist' : client.getplaylist()}

class PlaylistSong(restful.Resource):
    def get(self,songid):
        return {'song' : client.getplaylistsong(songid)}

    def put(self,songid):
        if client.playid(songid):
            pass
        else:
            abort(404)

class Next(restful.Resource):
    def put(self):
        client.next()

class Previous(restful.Resource):
    def put(self):
        client.previous()

class Player(restful.Resource):
    def put(self):
        def playercommand(state):
            if state not in ['play','stop','pause']:
                abort(400)
            return state
        post_parser = reqparse.RequestParser()
        post_parser.add_argument(
                    'state', dest='state',
                     type=playercommand, required=True, location='json'
                     )
        args = post_parser.parse_args()
        client.player(args.state)
    def get(self):
        return {'state' : client.getplayerstatus()}

class Random(restful.Resource):
    def put(self):
        put_parser = reqparse.RequestParser()
        put_parser.add_argument(
                    'active', dest='active',
                     type=int, required=True,
                     help="body parameter must specify a boolean value [0,1]",
                     location='json')
        args = put_parser.parse_args()
        if not args.active in [0, 1]:
            abort(400)
        client.random(args.active)

class Repeat(restful.Resource):
    def put(self):
        put_parser = reqparse.RequestParser()
        put_parser.add_argument(
                    'active', dest='active',
                     type=int, required=True,
                     help="body parameter must specify a boolean value [0,1]",
                     location='json')
        args = put_parser.parse_args()
        if not args.active in [0, 1]:
            abort(400)
        client.repeat(args.active)
