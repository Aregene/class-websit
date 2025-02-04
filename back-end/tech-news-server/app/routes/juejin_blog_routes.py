'''
Date: 2025-02-03 21:55:25
LastEditors: Aregene
LastEditTime: 2025-02-04 11:13:26
'''
# routes/juejin_blog_routes
from fastapi import APIRouter
from app.db.db import get_db
from app.models.models import TechNewsModel
from app.configs.crawler_url_config import url_mapping, scroll_times, scroll_pause
from app.util.juejin_crawler import crawl_juejin
from app.db.db import db_crawler_insert
# 创建一个路由对象
router = APIRouter()

# 定义路由
@router.get("/news")
async def read_news():
    db = get_db()  # 获取会话对象
    try:
        news = db.query(TechNewsModel).limit(5).all()  # 获取前5行记录
        for item in news:
            print(item)  # 打印每行记录
        return news
    finally:
        db.close()  # 关闭会话对象

@router.get("/crawler")
async def insert_news():
    # 定义表结构
    data_model = TechNewsModel
    # 调用爬虫函数并获取数据
    json_data = crawl_juejin(
        url_mapping=url_mapping,
        scroll_times = scroll_times,
        scroll_pause = scroll_pause
    )
    db_crawler_insert(json_data, data_model)
    return json_data

