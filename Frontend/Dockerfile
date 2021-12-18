FROM node:14-alpine
RUN set NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN yarn install
CMD ["npm", "run", "start"]