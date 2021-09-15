from node:alpine

WORKDIR usr/src/app

COPY . .
RUN node install

CMD node app.js