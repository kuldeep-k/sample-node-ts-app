#!/bin/bash

sudo apt install curl
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash - && apt-get install -y nodejs npm
sudo npm install -g pm2