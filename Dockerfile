FROM node:8.9.4-alpine

RUN yarn global add serve
CMD serve -s build

EXPOSE 5000

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /usr/app
ADD . /usr/app

RUN yarn run build --production
