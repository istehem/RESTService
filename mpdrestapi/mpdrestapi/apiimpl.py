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
                     type=playercommand, required=True, location='values'
                     )
        args = post_parser.parse_args()
        client.player(args.state)
    def get(self):
        return {'state' : client.getplayerstatus()}
