    FROM node:alpine

    WORKDIR /app

    RUN npm config set timeout 300000 && npm install

    COPY package*.json ./


    COPY . ./

    RUN npm run build 

    EXPOSE 3000

    CMD ["npm", "start"] 