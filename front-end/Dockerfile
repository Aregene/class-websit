# 使用 Node.js 官方镜像作为构建阶段的基础镜像
FROM node:16 AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 yarn.lock 文件
COPY package.json yarn.lock ./

# 安装项目依赖
RUN yarn install --frozen-lockfile

# 复制项目文件
COPY . .

# 构建 Next.js 应用
RUN yarn build

# 使用 Node.js 官方镜像作为运行阶段的基础镜像
FROM node:16 AS runner

# 设置工作目录
WORKDIR /app

# 复制构建阶段的输出
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# 安装生产依赖
RUN yarn install --production --frozen-lockfile

# 暴露端口
EXPOSE 3000

# 启动 Next.js 应用
CMD ["yarn", "start"]
