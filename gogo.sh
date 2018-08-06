#!/bin/bash
cd ./main-gastby && \
npm i -s --no-progress && \
npm run build && \
cd ../ && \
docker-compose up --build
