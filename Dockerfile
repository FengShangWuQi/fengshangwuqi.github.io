FROM node:latest as builder

ENV APP_DIR=/src-blog

WORKDIR $APP_DIR

COPY package.json $APP_DIR
COPY *.lock $APP_DIR
COPY packages $APP_DIR/packages
RUN yarn && yarn pkg:build 

COPY . $APP_DIR
RUN yarn appkit build blog

FROM nginx:alpine

COPY --from=builder /src-blog/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
