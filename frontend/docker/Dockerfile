FROM node:12.14

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .

EXPOSE 8083

CMD [ "npm", "start" ]
