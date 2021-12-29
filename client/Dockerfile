FROM node:14-alpine
RUN export NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g expo-cli && yarn install
CMD ["npm", "run", "start"]