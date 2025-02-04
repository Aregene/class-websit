'''
Date: 2025-02-03 19:05:02
LastEditors: Aregene
LastEditTime: 2025-02-03 22:35:17
'''
# app/main.py
from fastapi import FastAPI
from app.routes.juejin_blog_routes import router as juejin_blog_routes
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


# 创建FastAPI应用实例
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 可以指定允许的源，或使用 ["*"] 允许所有源
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# 添加路由到应用实例
app.include_router(juejin_blog_routes)

# 启动应用
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)