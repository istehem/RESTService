from flask import Flask, render_template
from mpdrestapi import MpdRestApi

app = Flask(__name__)

MpdRestApi(app)

@app.route('/')
def home():
    return render_template('index.html')


