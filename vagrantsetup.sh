#!/usr/bin/env bash

locale-gen UTF-8

echo "Provisioning Virtual Machine..."
sudo apt-get update
echo "Installing developer packages..."
sudo apt-get install build-essential curl vim -y > /dev/null
echo "Installing Git..."
sudo apt-get install git -y > /dev/null
echo "Installing Node and NVM..."
curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.nvm/nvm.sh
nvm install node
nvm alias default node
cd /vagrant
echo "Installing Node dependencies..."
npm install -g webpack
npm install
npm shrinkwrap --dev
echo "Installing MongoDb"
sudo apt-get install -y mongodb-org=3.6.4 mongodb-org-server=3.6.4 mongodb-org-shell=3.6.4 mongodb-org-mongos=3.6.4 mongodb-org-tools=3.6.4 && \
echo "mongodb-org hold" | dpkg --set-selections && \
echo "mongodb-org-server hold" | dpkg --set-selections && \
echo "mongodb-org-shell hold" | dpkg --set-selections && \
echo "mongodb-org-mongos hold" | dpkg --set-selections && \
echo "mongodb-org-tools hold" | dpkg --set-selections && \
sed -i '/bind_ip = 127.0.0.1/,/bind_ip\ =\ 127\.0\.0\.1/s/^/#/' /etc/mongod.conf && \
service mongod restart
sudo systemctl enable mongod.service
echo "Installing Parse Server"
npm install -g parse-server mongodb-runner
mongodb-runner start
parse-server --appId yourMarketPlace --masterKey 6403107 --databaseURI mongodb://localhost/yourmarketplace
echo "Installing Parse Dashboard"
npm install -g parse-dashboard
parse-dashboard --appId yourMarketPlace --masterKey 6403107 --serverURL "https://localhost/yourmarketplace" --appName optionalName