FROM node:lts-alpine3.16

WORKDIR /opt/app

ENV NODE_ENV production 

COPY code/frontend/package*.json ./

RUN npm ci

COPY code/frontend /opt/app

RUN npm install --dev && npm run build

CMD ["npm", "start"]