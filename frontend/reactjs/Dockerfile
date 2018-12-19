FROM node:lts-alpine

COPY package.json .
COPY yarn.lock .

RUN npm i -g yarn

RUN yarn --no-progress && \
  mkdir /app && \
  cp -R ./node_modules ./app

WORKDIR /app

COPY . .
