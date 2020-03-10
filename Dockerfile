FROM node:10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app/package.json

RUN npm install

EXPOSE 3000

CMD [ "yarn", "start" ]
