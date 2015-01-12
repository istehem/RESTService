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

class Next(restful.Resource):
    def post(self):
        return {'song' : client.next()}

class Previous(restful.Resource):
    def post(self):
        return {'song' : client.previous()}

class Player(restful.Resource):
    def post(self):
        def playercommand(command):
            if command not in ['play','stop','pause']:
                abort(400)
            return command
        post_parser = reqparse.RequestParser()
        post_parser.add_argument(
                    'command', dest='command',
                     type=playercommand, required=True, location='values'
                     )
        args = post_parser.parse_args()
        client.player(args.command)
        return {'state' : args.command}
    def get(self):
        return {'state' :client.getplayerstatus()}
