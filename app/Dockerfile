FROM     ubuntu:16.04
LABEL maintainer="bitard [dot] michael [at] gmail [dot] com"

ENV DEBIAN_FRONTEND=noninteractive \
    ANDROID_HOME=/opt/android-sdk-linux \
    NODE_VERSION=10.13.0 \
    NPM_VERSION=6.4.1 \
    IONIC_VERSION=4.3.1 \
    CORDOVA_VERSION=8.1.2\
    GRADLE_VERSION=4.10.2


ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json


# Install basics
RUN apt-get update &&  \
    apt-get install -y git wget curl unzip build-essential ruby ruby-dev ruby-ffi gcc make && \
    curl --retry 3 -SLO "http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" && \
    tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 && \
    rm "node-v$NODE_VERSION-linux-x64.tar.gz" && \
    npm install -g npm@"$NPM_VERSION" && \
    npm install -g cordova@"$CORDOVA_VERSION" ionic@"$IONIC_VERSION" && \
    npm cache clear --force && \
    gem install sass && \
    git config --global user.email "gayan.justo@gmail.com" && \
    git config --global user.name "Gayan Justo" && \
    ionic start myApp sidemenu --no-interactive

# install python-software-properties (so you can do add-apt-repository)
RUN apt-get update && apt-get install -y -q python-software-properties software-properties-common  && \
    add-apt-repository ppa:webupd8team/java -y && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get update


WORKDIR /app
COPY . /app

RUN npm install -g @angular/cli
RUN npm install -g @angular-devkit/build-angular
RUN npm install -g @angular/compiler-cli
RUN npm install -g typescript
RUN npm install @angular/compiler
RUN npm install -g rxjs
RUN npm install -g @angular/core


RUN npm install


EXPOSE 8100 35729
CMD ["ionic", "serve"]
