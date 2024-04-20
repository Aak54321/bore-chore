FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apt-get update && apt-get -y install ffmpeg

COPY . .

EXPOSE 3000

CMD ["npm","start"]