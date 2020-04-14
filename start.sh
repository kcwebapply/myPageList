#!/bin/bash


DIR="node_modules"

if [ ! -d $DIR ] ;then
  npm install
fi

node server.js & npm start
