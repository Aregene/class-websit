'''
Date: 2025-02-02 08:52:01
LastEditors: Aregene
LastEditTime: 2025-02-04 10:42:28
'''
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from bs4 import BeautifulSoup
from app.models.models import TechNewsModel
from app.db.db import db_crawler_insert
from app.util.chrome_driver import setup_driver
from app.util.data_loading import get_page_content
from app.util.data_process import data_processing
from app.configs.crawler_url_config import url_mapping, scroll_times,scroll_pause




def fetch_and_extract_articles(url_mapping, scroll_times, scroll_pause):
    """处理所有URL页面，获取并提取文章信息"""
    base_url = 'https://juejin.cn'
    current_time = datetime.now()  # 在主函数中定义当前时间

    all_results = []  # 用于存放所有页面的结果

    for category, url in url_mapping.items():
        # 设置浏览器驱动并获取页面内容
        with setup_driver() as driver:
            page_source = get_page_content(driver, url, scroll_times, scroll_pause)

        # 解析页面内容
        soup = BeautifulSoup(page_source, 'html.parser')

        # 提取文章信息
        results = data_processing(soup, base_url, current_time, category)
        all_results.extend(results)  # 将每个页面的结果添加到总结果中

    return all_results

def crawl_juejin(url_mapping, scroll_times, scroll_pause):
    # 获取并提取文章信息
    all_results = fetch_and_extract_articles(url_mapping, scroll_times, scroll_pause)
    return all_results  # 返回结果而不是打印
