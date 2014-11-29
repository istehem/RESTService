from flask import abort, render_template
from flask.ext import restful
from flask.ext.restful import fields, marshal_with, reqparse

from app import app

from subprocess import *

from Backend import *

api = restful.Api(app)


basepath='/api/v1/'

client = Client()

class Messages(restful.Resource):
    messages = {'messages' : [] }
    def get(self):
        return self.messages
    def post(self,message):
        xs = messages['messages']
        xs.append(message)
        messages['messages'] = xs
        return

class Message(restful.Resource):
    message = {'text' : ''}
    def get(self, messageid):
        return messages[messagesid]


class MessageResource(restful.Resource):
    def get(self):
        return {'hello' : 'world'}


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

api.add_resource(Status, basepath + 'status')
api.add_resource(Version, basepath + 'version')
api.add_resource(Currentsong, basepath + 'currentsong')
api.add_resource(Playlist, basepath + 'playlist')
api.add_resource(PlaylistSong, basepath + 'playlist/<int:songid>')
api.add_resource(Player, basepath + 'player')


@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
