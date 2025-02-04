'''
Date: 2025-02-04 09:21:16
LastEditors: Aregene
LastEditTime: 2025-02-04 09:21:36
'''
import time
def scroll_down(driver, times=3, pause=2):
    """模拟向下滚动页面"""
    for _ in range(times):
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(pause)

def get_page_content(driver, url, scroll_times=3, scroll_pause=2):
    """获取指定URL的页面内容，并执行滚动操作"""
    driver.get(url)
    scroll_down(driver, times=scroll_times, pause=scroll_pause)
    return driver.page_source
