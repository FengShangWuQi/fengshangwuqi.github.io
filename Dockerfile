FROM node:current as builder

ENV APP=blog    \
    APP_DIR=/src-blog

WORKDIR $APP_DIR

COPY package.json $APP_DIR/
RUN yarn

COPY . $APP_DIR/
RUN yarn build

FROM nginx:alpine

COPY --from=builder /src-blog/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]