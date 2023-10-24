
FROM node:14 as buildimage
WORKDIR /usr/src/app
COPY ./ ./client
RUN cd client && RUN npm cache clean --force && npm install
RUN cd client && npm run build

FROM node:14 
WORKDIR /usr/src/app
COPY  --from=buildimage /usr/src/app/client .
EXPOSE 3000
CMD [ "npm", "start" ]

