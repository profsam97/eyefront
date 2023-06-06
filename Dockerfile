    FROM node:alpine

    WORKDIR /app

    COPY package*.json ./

    RUN npm install --timeout 30000

    COPY . ./

    RUN npm run build 

    EXPOSE 3000

    CMD ["npm", "start"] 