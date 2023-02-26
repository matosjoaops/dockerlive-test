FROM node:alpine

ADD . .

MAINTAINER fasfd

RUN curl -f http://file.zip

RUN cd ~

RUN apk add curl

CMD node index.js
