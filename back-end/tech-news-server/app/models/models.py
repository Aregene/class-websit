'''
Date: 2025-02-03 19:23:54
LastEditors: Aregene
LastEditTime: 2025-02-03 22:32:42
'''
# models.py

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Date

Base = declarative_base()  # 定义基类

class TechNewsModel(Base):  # 定义 TechNews 模型
    __tablename__ = 'juejintechnews'  # 直接设置表名

    # 定义表结构
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String)
    abstract = Column(String)
    date = Column(Date)
    link = Column(String)
    category = Column(String)
