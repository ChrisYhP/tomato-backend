FROM node:12.17 AS builder

# ENV PROJECT_ENV production
# ENV NODE_ENV production

WORKDIR /code

# # 多阶段构建 优化docker体积
ADD package.json /code
RUN npm install --registry=https://registry.npm.taobao.org

COPY . /code
RUN npm run start:prod

