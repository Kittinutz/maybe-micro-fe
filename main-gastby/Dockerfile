# Doesn't work on sharp lib

FROM alpine:3.7

COPY package.json .
COPY package-lock.json .

RUN apk add --update nodejs
RUN apk add vips-dev fftw-dev --update-cache --repository https://dl-3.alpinelinux.org/alpine/edge/testing/

RUN npm i -s --no-progress && \
    mkdir /app && \
    cp -R ./node_modules ./app

WORKDIR /app

COPY . .

RUN npm run build
