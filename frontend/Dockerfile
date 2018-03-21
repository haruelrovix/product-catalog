FROM node:alpine

RUN mkdir -p /code

WORKDIR /code

ADD . /code

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  npm run web:build && \
  apk del native-deps

CMD [ "npm", "run", "web:serve" ]

EXPOSE 3000