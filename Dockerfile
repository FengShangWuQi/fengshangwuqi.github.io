FROM node:lts-alpine as builder

ENV APP_DIR=/blog

WORKDIR $APP_DIR

COPY package*.json $APP_DIR/
RUN npm ci
COPY . $APP_DIR/

RUN npm start bg b

FROM nginx:alpine

COPY --from=builder /blog/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]