from mpd import MPDClient

class Client:
    client = None
    def __init__(self):
        self.client = MPDClient()
        self.client.timeout = 10
        self.client.idletimeout = None
        self.client.connect("localhost", 6600)
    def version(self):
        return self.client.mpd_version

    def getstatus(self):
        return self.client.status()

    def getcurrentsong(self):
        return self.client.currentsong()

    def getplaylist(self):
        xs = []
        for (id , file) in enumerate(self.client.playlistid()):
            xs.append({'file' : file, 'id' : id})
        return xs

    def getplaylistsong(self,songid):
        return self.client.playlistinfo()[songid]

    def player(self,option):
        if option == "pause":
            self.client.pause(1)
        else:
            getattr(self.client, option)()

    def getplayerstatus(self):
        return self.client.status()["state"]


    def previous(self):
        self.client.previous()
        return self.getcurrentsong()

    def next(self):
        self.client.next()
        return self.getcurrentsong()
