FROM node:alpine

WORKDIR /opt/app

ENV NODE_ENV production 

COPY code/frontend/package*.json ./

RUN npm ci

COPY code/frontend /opt/app

RUN npm install --dev && npm run build

CMD ["npm", "start"]