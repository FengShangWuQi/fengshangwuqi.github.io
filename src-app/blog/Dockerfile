FROM node:lts as builder

ENV APP_DIR=/src-blog

WORKDIR $APP_DIR

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./

RUN apt update \
		&& apt -y upgrade \
		&& apt install -y libpng-dev autoconf libpng-dev pkg-config nasm \
		&& curl -f https://get.pnpm.io/v6.js | node - add --global pnpm \
		&& pnpm install

COPY . .
RUN pnpx appkit build blog

FROM nginx:stable-alpine

COPY --from=builder /src-blog/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
