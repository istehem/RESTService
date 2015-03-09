from flask.ext import restful
from apiimpl import *

class MpdRestApi(restful.Api):
    def __init__(self, app=None, prefix='',
                default_mediatype='application/json', decorators=None,
                catch_all_404s=False, url_part_order='bae'):

        super(MpdRestApi,self).__init__(app, prefix,
            default_mediatype, decorators,
            catch_all_404s, url_part_order)

        self.add_resource(Status, basepath + 'status')
        self.add_resource(Version, basepath + 'version')
        self.add_resource(Currentsong, basepath + 'currentsong')
        self.add_resource(Playlist, basepath + 'playlist/')
        self.add_resource(PlaylistSong, basepath + 'playlist/<int:songid>')
        self.add_resource(Player, basepath + 'player')
        self.add_resource(Next, basepath + 'next')
        self.add_resource(Previous, basepath + 'previous')
