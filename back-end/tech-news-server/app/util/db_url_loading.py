'''
Date: 2025-02-04 09:14:44
LastEditors: Aregene
LastEditTime: 2025-02-04 10:44:18
'''
from dotenv import load_dotenv
import os

def db_url_loader(url='DATABASE_URL'):
    # 加载 .env 文件
    load_dotenv()
    # 数据库连接URL
    DATABASE_URL = os.getenv(url)
    return DATABASE_URL