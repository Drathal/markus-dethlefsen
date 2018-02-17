FROM node:8.9.4-alpine

RUN yarn global add serve
CMD serve -s build

EXPOSE 5000

COPY yarn.lock /yarn.lock
COPY package.json /package.json
RUN yarn

COPY . .

RUN yarn run build --production
