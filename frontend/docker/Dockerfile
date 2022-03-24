FROM node:12.14

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY ./docker/entrypoint-dev /usr/local/bin/

EXPOSE 8083

RUN chmod +x /usr/local/bin/entrypoint-dev
ENTRYPOINT [ "entrypoint-dev" ] 
