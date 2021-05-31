FROM node:latest

COPY ./app ./app
WORKDIR /app

RUN npm install
EXPOSE 8080

ENTRYPOINT ["npm", "run", "start"]