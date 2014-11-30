from flask.ext import restful

class Status(restful.Resource):
    def get(self):
        return {'status': client.getstatus()}
