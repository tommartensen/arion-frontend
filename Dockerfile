FROM node:latest

WORKDIR /arion-frontend

COPY . .

RUN npm install

EXPOSE 5000

CMD npm run build && npm run serve
