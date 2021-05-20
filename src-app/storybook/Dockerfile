FROM node:lts as builder

ENV APP_DIR=/src-storybook

WORKDIR $APP_DIR

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN curl -f https://get.pnpm.io/v6.js | node - add --global pnpm \
		&& pnpm install

COPY . .
RUN pnpm appkit build storybook

FROM nginx:alpine

COPY --from=builder /src-storybook/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
