'''
Date: 2025-02-04 09:22:02
LastEditors: Aregene
LastEditTime: 2025-02-04 09:22:36
'''
import re
from datetime import datetime, timedelta
def format_date(date_str, current_time):
    """格式化时间为 YYYY/MM/DD"""
    match = re.match(r'(\d+)(\D+)', date_str.strip())
    if match:
        quantity = int(match.group(1))
        unit = match.group(2).strip()
        if '分钟前' in unit:
            target_time = current_time - timedelta(minutes=quantity)
        elif '小时前' in unit:
            target_time = current_time - timedelta(hours=quantity)
        elif '天前' in unit:
            target_time = current_time - timedelta(days=quantity)

        else:
            target_time = current_time

        return target_time.strftime('%Y/%m/%d')

    return current_time.strftime('%Y/%m/%d')