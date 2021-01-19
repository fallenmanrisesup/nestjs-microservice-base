FROM node:alpine

WORKDIR /app

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn

RUN npm i -g @nestjs/cli

COPY ./ ./

RUN yarn build

CMD [ "yarn", "start:prod" ]
