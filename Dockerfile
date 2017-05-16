FROM node:latest

WORKDIR /arion-frontend

COPY . .

RUN mv src/config/config-template.js src/config/config.js

RUN npm install

EXPOSE 5000

CMD npm run build && npm run serve
