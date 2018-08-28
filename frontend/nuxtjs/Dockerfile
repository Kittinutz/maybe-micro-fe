FROM node:8.11.3

COPY package.json .
COPY package-lock.json .

RUN npm i -s --no-progress && \
    mkdir /app && \
    cp -R ./node_modules ./app

WORKDIR /app

COPY . .
