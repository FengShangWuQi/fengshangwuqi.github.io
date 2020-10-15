FROM node:latest as builder

ENV APP_DIR=/src-blog
ENV APP=blog
ENV META_AUTHOR=枫上雾棋
ENV META_TITLE="枫上雾棋的 blog"
ENV META_DECS="枫上雾棋的 blog"
ENV SITE_URL=https://blog.fengshangwuqi.com
ENV PATH_PREFIX=/
ENV SOURCES=posts,zhoubao
ENV SIZE=6
ENV TRACKING_ID=UA-114534441-1

WORKDIR $APP_DIR

COPY package.json ./
COPY *.lock ./
RUN yarn

COPY . .
RUN yarn gatsby build --prefix-paths

FROM nginx:alpine

COPY --from=builder /src-blog/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
