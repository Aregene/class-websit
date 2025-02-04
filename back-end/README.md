<!--
 * @Date: 2025-02-03 19:06:11
 * @LastEditors: Aregene
 * @LastEditTime: 2025-02-04 11:59:44
-->
# back-end开发文档
## 目录结构

```

class-website
│
└── back-end (微服务架构)
    ├── tech-news-server (科技博客爬虫)
    │   ├── app`
    │   │   ├── __init__.py
    │   │   ├── main.py        # FastAPI应用入口
    │   │   ├── routes         # 路由文件夹
    │   │   ├── db             # 数据库相关
    │   │   └── uti            # 工具包
    │   │   └── models         # 数据模型
    │   ├── Dockerfile         # Docker构建文件
    │   └── requirements.txt   # 依赖库列表
    │
    ├── docker-compose.yml     # Docker Compose配置文件，用于定义和运行多容器应用
    └── README.md              # 项目说明文档
    └── .env                   # 环境变量配置文件

```

# 打包requirements.txt文件
pip freeze > requirements.txt

# 升级pip
python.exe -m pip install --upgrade pip

# 创建虚拟环境（注意解释器选择）
python -m venv .venv
.\.venv\Scripts\activate

# 包调试
python -m app.db.db
python -m app.main

# 运行项目
cd d:\class-website\back-end\tech-news-server
uvicorn app.main:app --reload