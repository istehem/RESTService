from setuptools import setup, find_packages # Always prefer setuptools over distutils

setup(
    name = 'mpdrestapi',

    version = '0.0.1',

    description='A Rest API for MPD (Music Player Deamon)',

    author = 'Oskar Ingemarsson',

    email = 'oskar.ingemarsson@gmail.com',

    licence = 'BSD3',

    packages = find_packages(exclude=[]),

    keywords = 'MPD REST JSON',

    classifiers = ['Programming Language :: Python :: 2'],

    install_requires=['flask','Flask-RESTful','python-mpd2']
)
