    FROM node:alpine

    WORKDIR /app


    COPY package*.json ./

    RUN export HTTP_TIMEOUT=300000 && npm install

    COPY . ./

    RUN npm run build 

    EXPOSE 3000

    CMD ["npm", "start"] 