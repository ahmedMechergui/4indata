FROM node:12.19.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache verify
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm","start"]