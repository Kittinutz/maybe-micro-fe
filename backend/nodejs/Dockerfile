FROM node:lts-alpine

COPY package.json .
COPY package-lock.json .

ENV CHROME_BIN=/usr/bin/chromium-browser
RUN apk update && \
  apk upgrade && \
  echo @3.8 https://ftp.acc.umu.se/mirror/alpinelinux.org/v3.8/community >> /etc/apk/repositories && \
  echo @3.8 https://ftp.acc.umu.se/mirror/alpinelinux.org/v3.8/main >> /etc/apk/repositories && \
  apk add --no-cache \
  freetype@3.8 \
  harfbuzz@3.8 \
  chromium@3.8 \
  nss@3.8

RUN npm i -s --no-progress && \
    mkdir /app && \
    cp -R ./node_modules ./app

WORKDIR /app

COPY . .
