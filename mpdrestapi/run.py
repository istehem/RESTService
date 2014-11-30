from flask import Flask
from mpdrestapi import MpdRestApi

app = Flask(__name__)
api = MpdRestApi(app)

app.run(debug=True)
