# 使用官方的 Python 基础镜像
FROM python:3.11-slim

# 设置工作目录
WORKDIR /app

# 复制requirements-linux.txt文件到工作目录
COPY requirements-linux.txt .

# 安装依赖项
RUN pip install --no-cache-dir -r requirements-linux.txt

# 将项目文件复制到工作目录中
COPY . .

# 暴露应用程序的端口（如果需要）
EXPOSE 8081

# 定义启动命令
CMD ["python", "app.py"]