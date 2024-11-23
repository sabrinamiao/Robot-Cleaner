FROM node:18-alpine

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["sh", "-c", "npx knex migrate:latest && node dist/index.js"]