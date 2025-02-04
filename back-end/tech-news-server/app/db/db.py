'''
Date: 2025-02-03 20:57:45
LastEditors: Aregene
LastEditTime: 2025-02-04 11:10:08
'''

# db.py

from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.models.models import TechNewsModel
from app.util.db_url_loading import db_url_loader

engine = create_engine(db_url_loader())
SessionLocal = sessionmaker(bind=engine)

# 初始化数据库（只在应用启动时调用一次）
def init_db():
    TechNewsModel.metadata.create_all(bind=engine)

def get_db():
    return SessionLocal()


def db_crawler_insert(json_data, data_model):
    session = get_db()
    for item in json_data:
        article = data_model(
            title=item.get('title', '无标题'),
            abstract=item.get('abstract', '无摘要'),
            date=datetime.strptime(item['date'], '%Y/%m/%d'),  
            link=item.get('link', ''),
            category=item.get('category', '无分类')  
        )
        try:
            session.add(article)
            print("添加文章:", article.title)
        except Exception as e:
            print(f"添加文章失败: {article.title}, 错误信息: {e}")

    # 提交更改
    session.commit()
    print("数据提交成功。")

    # 关闭会话
    session.close()
    print("会话已关闭。")