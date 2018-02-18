FROM node:8.9.4-alpine

COPY yarn.lock /yarn.lock
COPY package.json /package.json
RUN yarn

COPY . .