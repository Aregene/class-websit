from app.util.date_format import format_date
def data_processing(soup, base_url, current_time, category):
    """
    从BeautifulSoup对象中提取文章信息，并添加分类信息。
    
    参数:
    - soup: BeautifulSoup对象，表示解析后的HTML文档。
    - base_url: 字符串，表示文章链接的基础URL。
    - current_time: datetime对象，表示当前时间，用于日期格式化。
    - category: 字符串，表示文章的分类。
    
    返回:
    - list of dicts: 每个字典包含文章的标题、简介、格式化后的日期、完整URL和分类。
    """
    
    # 提取文章标题、日期和简介的BeautifulSoup对象列表
    blog_titles = soup.find_all('a', class_='jj-link title')
    blog_dates = soup.find_all('li', class_='item date')
    blog_introductions = soup.find_all('div', class_='abstract')
    
    # 初始化结果列表
    results = []
    
    # 确保三个列表长度一致，避免索引错误
    min_length = min(len(blog_titles), len(blog_dates), len(blog_introductions))
    
    # 遍历每个文章元素
    for i in range(min_length):
        try:
            # 提取标题、日期和简介的文本内容
            title = blog_titles[i].get_text(strip=True)
            date_str = blog_dates[i].get_text(strip=True)
            introduction = blog_introductions[i].get_text(strip=True)
            
            # 拼接文章的完整URL
            link = blog_titles[i]['href']
            full_url = base_url + link
            
            # 格式化日期（假设format_date函数已经定义）
            formatted_date = format_date(date_str, current_time)
            
            # 构建结果字典并添加到结果列表
            result = {
                "title": title,
                "abstract": introduction,
                "date": formatted_date,
                "link": full_url,
                "category": category
            }
            results.append(result)
        
        except Exception as e:
            # 如果提取过程中发生任何异常，打印错误信息并继续处理下一个元素
            print(f"Error processing article at index {i}: {e}")
    
    # 返回结果列表
    return results