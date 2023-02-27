FROM node

ADD . .

MAINTAINER fasfd

RUN curl -f http://file.zip

RUN cd ~

RUN apt-get install postgresql

CMD node index.js
