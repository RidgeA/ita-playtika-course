FROM node:14-alpine as dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force

FROM dependencies as build
WORKDIR /app
COPY . .
RUN npm run build

FROM build as prodDependencies
WORKDIR /app
COPY --from=dependencies /app/package*.json ./
COPY --from=dependencies /app/node_modules ./node_modules/
RUN npm prune --production

FROM node:14-alpine
WORKDIR /app
COPY --from=prodDependencies /app/node_modules ./node_modules/
COPY --from=build /app/dist /app
EXPOSE 3000
ENV FILESTORE_PATH="/app/filestorage/storage.json"
CMD ["node", "main.js"]
