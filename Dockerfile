FROM node:14-slim

RUN mkdir --parents /home/node/app/node_modules && chown --recursive node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json /home/node/app

USER node

COPY --chown=node:node . .

RUN npm install

CMD ["npm", "run", "dev"]