from flask import Flask
class Message:
    path = ""
    structure = {}
    def __init__(self, path, category):
        structure = {
        'id' : -1,
        'category' : 'main',
        'text' : '',
        'created' : '',
        'updated' : '',
        'url'     : ''
        }

    def get(self):
        return structure
