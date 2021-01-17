FROM node as builder

ENV APP_DIR=/src-blog

WORKDIR $APP_DIR

COPY package.json ./
COPY *.lock ./
RUN yarn

COPY . .
RUN yarn appkit build blog

FROM nginx:alpine

COPY --from=builder /src-blog/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
