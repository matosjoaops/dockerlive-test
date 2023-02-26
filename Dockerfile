FROM node:alpine

ADD . .

MAINTAINER fasfd

RUN curl -f http://file.zip

# RUN cd ~

# RUN apt-get install curl
RUN apk add curl

CMD node index.js
