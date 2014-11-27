#!/bin/bash

DIR="$(pwd)/www"
if [ -d "$DIR" ]; then
    cd $DIR
    echo "starting server!"
    python -m CGIHTTPServer
else
    echo "directory $DIR does not exist"
    exit 1
fi
