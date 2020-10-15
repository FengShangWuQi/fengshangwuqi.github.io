FROM node:latest as builder

ENV APP_DIR=/src-storybook

WORKDIR $APP_DIR

COPY package.json ./
COPY *.lock ./
RUN yarn

COPY . .
RUN yarn appkit build storybook

FROM nginx:alpine

COPY --from=builder /src-storybook/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
