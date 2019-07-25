FROM node:10-alpine

RUN apk add --update \
    g++ \
    gcc \
    python \
    python-dev \
    py-pip \
    build-base \
    && pip install virtualenv \
    && rm -rf /var/cache/apk/*

RUN mkdir app

WORKDIR /app

COPY ./src /app/src
COPY ./.env /app
COPY ./tsconfig.json /app
COPY ./package.json /app
COPY ./yarn.lock /app

RUN yarn

RUN yarn build
CMD yarn start:prod