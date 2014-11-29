from flask import Flask, abort, render_template

app = Flask(__name__)

from app import MpdRestApi
