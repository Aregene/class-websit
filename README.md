<!--
 * @Date: 2024-12-18 13:13:59
 * @LastEditors: Aregene
 * @LastEditTime: 2025-02-03 17:33:43
-->
# webherbs
Build a website and collaborate with the four major Huai medicine associations to upload photos of Huai medicine with obvious characteristics of the four major Huai medicine, helping people in need to identify the authenticity of purchasing Huai medicine in the market.
npx prettier . --write //整理代码格式
npx prettier . --check//检查代码格式

项目根目录
│
├── 前端 (Next.js)
│   ├── pages
│   │   ├── index.js           # 首页
│   │   ├── products.js        # 产品展示页
│   │   └── ...                # 其他页面
│   ├── components
│   │   ├── ProductList.js     # 产品列表组件
│   │   ├── ProductItem.js     # 产品项组件
│   │   └── ...                # 其他组件
│   ├── services
│   │   ├── api.js             # API请求服务
│   │   └── ...                # 其他服务
│   ├── public                 # 静态资源
│   ├── styles                 # 样式文件
│   ├── package.json           # 项目依赖管理
│   └── next.config.js         # Next.js配置文件
│
└── 后端 (微服务架构)
    ├── 服务A (例如：用户服务)
    │   ├── app
    │   │   ├── __init__.py
    │   │   ├── main.py        # FastAPI应用入口
    │   │   ├── routes         # 路由文件夹
    │   │   ├── db             # 数据库相关
    │   │   └── ...            # 其他模块
    │   ├── Dockerfile         # Docker构建文件
    │   └── requirements.txt   # 依赖库列表
    │
    ├── 服务B (例如：产品服务)
    │   ├── app
    │   │   ├── __init__.py
    │   │   ├── main.py        # 另一个FastAPI应用入口
    │   │   ├── routes         # 产品相关路由
    │   │   ├── db             # 数据库连接与模型
    │   │   └── ...            # 其他功能模块
    │   ├── Dockerfile         # 服务B的Docker构建文件
    │   └── requirements.txt   # 服务B的依赖库
    │
    ├── 服务C (如需要，可继续添加)
    │   ...
    │
    ├── nginx                  # 反向代理与负载均衡配置（可选）
    │   ├── nginx.conf         # Nginx配置文件
    │   └── ...                # 其他Nginx相关文件
    │
    ├── docker-compose.yml     # Docker Compose配置文件，用于定义和运行多容器应用
    └── README.md              # 项目说明文档

前端命名规范
‌项目结构命名‌：

使用小写字母，单词之间使用短横线（-）或下划线（_）分隔。例如：my-project 或 my_project。
目录和文件命名通常使用小写字母，多个单词以下划线连接，例如：src、components、utils、styles。
单文件组件（如React组件）通常使用PascalCase（大驼峰命名法），例如：HeaderComponent.js 或 FooterComponent.vue。
‌组件命名‌：

基础组件（如按钮、输入框等）通常使用前缀来区分，如 BaseButton、BaseInput。
业务组件（与特定业务逻辑相关的组件）可以使用 Custom 前缀，如 CustomCard。
只拥有单个活跃实例的组件，可以使用 The 前缀，如 TheHeader、TheSidebar，表示其在应用中的唯一性。
‌文件命名‌：

HTML、CSS文件通常使用小写字母，多个单词以下划线连接，例如：header.html、footer.css。
JavaScript/TypeScript文件可以使用小写字母，多个单词以下划线连接，例如：utils.js、data_helpers.ts。
‌变量、函数、类命名‌：

变量名、函数名通常使用camelCase（小驼峰命名法），例如：getUserData、handleSubmit。
类名使用PascalCase（大驼峰命名法），例如：UserProfile、ProductList。
常量名全部大写，单词之间用下划线连接，例如：MAX_RETRIES、API_URL。
后端命名规范
‌项目结构命名‌：

与前端类似，使用小写字母，单词之间使用短横线（-）或下划线（_）分隔。例如：my-backend-project 或 my_backend_project。
目录和文件命名通常使用小写字母，多个单词以下划线连接，例如：src、controllers、services、models。
‌控制器、服务、模型命名‌：

控制器（Controller）类通常以 Controller 结尾，例如：UserController、ProductController。
服务（Service）类通常以 Service 结尾，例如：UserService、OrderService。
模型（Model）类通常以实体名称命名，例如：User、Product。
‌接口、方法命名‌：

接口和方法名通常使用camelCase（小驼峰命名法），例如：getUserById、createOrder。
常量名、枚举名通常使用全部大写字母，单词之间用下划线连接，例如：HTTP_OK、USER_ROLE_ADMIN。
‌数据库命名‌：

表名和字段名通常使用小写字母，单词之间使用下划线分隔，例如：user_info、order_details。
索引、约束等数据库对象也遵循类似的命名约定。
通用建议
‌避免使用特殊字符‌：在命名时避免使用空格、特殊符号等，以免引起解析错误或兼容性问题。
‌简洁明了‌：命名应尽可能简洁明了，能够准确传达其用途或功能。
‌一致性‌：在整个项目中保持命名风格的一致性，有助于提高代码的可读性和可维护性。
请注意，上述命名规范并非绝对，不同团队和项目可能会有所不同。重要的是在项目开始时明确命名约定，并在整个开发过程中严格遵守。