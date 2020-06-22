FROM node:lts-alpine as builder

ENV APP_DIR=/src-blog

WORKDIR $APP_DIR

COPY . $APP_DIR/
RUN yarn && yarn pkg:build && yarn appkit build blog

FROM nginx:alpine

COPY --from=builder /src-blog/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
