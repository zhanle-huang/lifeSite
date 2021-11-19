## 1.通用信息

1. 地址：https://159.23.234.19:80

2. 项目名：lifeSite

3. 都需要携带用户信息和token身份，用户信息采用加密传输

4. 成功返回格式：

   ~~~json
   {
       data: {},
       status: 1
       msg: '接口信息'
   }
   ~~~

5. 失败返回格式

   ~~~json
   {
       data: null,
       status: 0
       msg: '接口信息'
   }
   ~~~

6. 请求地址：地址+项目名+API地址

   1. 示例：https://159.23.234.19/lifeSite/xxxx

## 2.接口信息

### 登录

1. API：POST/user/login

2. 参数：

   |  参数名  |  类型  | 是否必填 |  说明  |    示例     |
   | :------: | :----: | :------: | :----: | :---------: |
   |  phone   | string |    是    | 手机号 | 12345678911 |
   | password | string |    是    |  密码  |   123456    |

3. 返回的结果

   ~~~json
   {
       data: {
           userInfo: {
               phone: '12345678911'
               password: '123456'
               token: '123s5a65s5x'
           }
       },
       status: 1,
       msg: '登录成功'
   }
   ~~~

### 注册

1. API：POST/user/register

2. 参数：

   |    参数名    |  类型  | 是否必填 |  说明  |    示例     |
   | :----------: | :----: | :------: | :----: | :---------: |
   |    phone     | string |    是    | 手机号 | 12345678911 |
   |   password   | string |    是    |  密码  |   123456    |
   |     name     | string |    是    | 用户名 |    测试     |
   | verification | string |    是    | 验证码 |   264267    |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '注册成功'
   }
   ~~~



### 修改密码

1. API：PUT/user/modifyPwd

2. 参数：

   |    参数名    |  类型  | 是否必填 |  说明  |    示例     |
   | :----------: | :----: | :------: | :----: | :---------: |
   |    phone     | string |    是    | 手机号 | 12345678911 |
   |    newPwd    | string |    是    | 新密码 |   123456    |
   | verification | string |    是    | 验证码 |   264267    |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '修改密码成功'
   }
   ~~~



### 收藏

#### 1. 添加文章收藏

1. API：POST/user/collect/article

2. 参数：

   |  参数名   |  类型  | 是否必填 | 说明       |      示例       |
   | :-------: | :----: | :------: | ---------- | :-------------: |
   | articleId | string |    是    | 文章编号   | 5asd55zx55asd55 |
   |   phone   | string |    是    | 用户手机号 |     123456      |
   
3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '收藏文章成功'
   }
   ~~~



#### 2. 取消文章收藏

1. API：DELETE/user/collect/article

2. 参数：

   |      参数名      |  类型  | 是否必填 | 说明     |  示例   |
   | :--------------: | :----: | :------: | -------- | :-----: |
   | articleCollectId | string |    是    | 收藏编号 | x5s5a5x |
   
3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '取消文章收藏成功'
   }
   ~~~

#### 3. 添加demo收藏

1. API：POST/collect/demo

2. 参数：

   | 参数名 |  类型  | 是否必填 | 说明       |      示例       |
   | :----: | :----: | :------: | ---------- | :-------------: |
   | demoId | string |    是    | demo编号   | 5asd55zx55asd55 |
   | phone  | string |    是    | 用户手机号 |     123456      |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '收藏demo成功'
   }
   ~~~



#### 4. 取消demo收藏

1. API：DELETE/collect/demo

2. 参数：

   |    参数名     |  类型  | 是否必填 | 说明     |  示例   |
   | :-----------: | :----: | :------: | -------- | :-----: |
   | demoCollectId | string |    是    | 收藏编号 | x5s5a5x |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '取消demo收藏成功'
   }
   ~~~



#### 5. 获取文章收藏

1. API：GET/collect/article

2. 参数：

   |  参数名  |  类型  | 是否必填 | 说明       |    示例     |
   | :------: | :----: | :------: | ---------- | :---------: |
   | pageNum  | Number |    是    | 页码       |      1      |
   | pageSize | Number |    是    | 页大小     | 10， 默认10 |
   |  userId  | string |    是    | 用户手机号 | 12345678911 |

3. 返回的结果

   ~~~json
   {
       data: {
           list: [
               {
                   id: '1234567890000001',
                   article: undefined,
                   phone: '12345678911',
                   title: '222',
                   content: null,
                   articleAuthor: '12345678912',
                   categoryId: '1234567890000002',
                   categoryName: '分类2',
                   categoryType: 'type2',
                   authorName: '测试2',
                   readNum: 0,
                   likeNum: 0,
                   recommentNum: 0,
                   articleTime: null,
                   createTime: null
               }
           ],
           total: 1000
       },
       status: 1,
       msg: '获取文章收藏列表成功'
   }
   ~~~



#### 6. 获取demo收藏

1. API：GET/collect/demo

2. 参数：

   |  参数名  |  类型  | 是否必填 | 说明       |    示例     |
   | :------: | :----: | :------: | ---------- | :---------: |
   | pageNum  | Number |    是    | 页码       |      1      |
   | pageSize | Number |    是    | 页大小     | 10， 默认10 |
   |  userId  | string |    是    | 用户手机号 | 12345678911 |

3. 返回的结果

   ~~~json
   {
       data: {
           list: [
               {
                   id: '1234567890000006',
                   demoId: '1234567890000001',
                   phone: '12345678915',
                   title: '今天真是个好日子啊+1++1',
                   demoAuthor: '12345678911',
                   authorName: '测试1',
                   path: 'xxx666',
                   downName: '测试5558888',
                   readNum: 0,
                   likeNum: 0,
                   downLoadNum: 0,
                   demoTime: 2021-10-20T02:31:02.000Z,
                   createTime: null
               }
           ],
           total: 1000
       },
       status: 1,
       msg: '获取demo收藏列表成功'
   }
   ~~~



### 文章

#### 1. 获取文章列表

1. API：GET/article

2. 参数：

   |   参数名    |  类型  | 是否必填 | 说明       |    示例     |
   | :---------: | :----: | :------: | ---------- | :---------: |
   |   pageNum   | Number |    是    | 页码       |      1      |
   |  pageSize   | Number |    是    | 页大小     | 10， 默认10 |
   | articleName | string |    否    | 查询关键字 |    测试     |

3. 返回的结果

   ~~~json
   {
       data: {
           list: [
               {
                   id: '编号',
                   categoryId: '分类id',
                   categoryName: '分类名称',
                   categoryType: '分类类型',
                   title: '文章标题',
                   author: '作者手机号',
                   authorName: '作者名称',
                   content: '内容',
                   readNum: '阅读数量'
                   recommedNum: '评论数量'
                   likeNum: '收藏数量'
                   createTime: '创建时间'
                   updateTime: '更新时间'
               }
           ],
           total: 1000
       },
       status: 1,
       msg: '获取文章列表成功'
   }
   ~~~



#### 2. 添加文章

1. API：POST/article

2. 参数：

   |   参数名   |  类型  | 是否必填 | 说明       |    示例     |
   | :--------: | :----: | :------: | ---------- | :---------: |
   | categoryId | string |    是    | 类型编号   |  4s4a5da54  |
   |   title    | string |    是    | 文章标题   |    xxxx     |
   |   author   | string |    是    | 作者手机号 | 12345678911 |
   |  content   |  blob  |    是    | 内容       |   [blob]    |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '添加文章成功'
   }
   ~~~



#### 3. 删除文章

1. API：DELETE/article

2. 参数：

   |  参数名   |  类型  | 是否必填 | 说明     |   示例    |
   | :-------: | :----: | :------: | -------- | :-------: |
   | articleId | string |    是    | 文章编号 | 4s4a5da54 |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '删除文章成功'
   }
   ~~~



#### 4. 根据id获取文章

1. API：GET/article/:id

2. 参数：无

3. 返回的结果

   ~~~json
   {
       data: {
           lsit: {
               id: '编号',
               categoryId: '分类id',
               categoryName: '分类名称',
               categoryType: '分类类型',
               title: '文章标题',
               author: '作者手机号',
               authorName: '作者名称',
               content: '内容',
               readNum: '阅读数量'
               recommedNum: '评论数量'
               likeNum: '收藏数量'
               createTime: '创建时间'
               updateTime: '更新时间'
           }
       },
       status: 1,
       msg: '获取文章成功'
   }
   ~~~



### 分类

#### 1. 获取分类列表

1. API：GET/category

2. 参数：

   |    参数名    |  类型  | 是否必填 | 说明       |    示例     |
   | :----------: | :----: | :------: | ---------- | :---------: |
   |   pageNum    | Number |    是    | 页码       |      1      |
   |   pageSize   | Number |    是    | 页大小     | 10， 默认10 |
   | categoryName | string |    否    | 查询关键字 |    测试     |

3. 返回的结果

   ~~~json
   {
       data: {
           list: [
               {
                   id: '编号',
                   name: '分类名称',
                   type: '分类类型',
                   createTime: '创建时间'
                   updateTime: '更新时间'
               }
           ],
           total: 1000
       },
       status: 1,
       msg: '获取分类列表成功'
   }
   ~~~



#### 2. 根据id获取分类

1. API：GET/category/:id

2. 参数：无

3. 返回的结果

   ~~~json
   {
       data: {
           lsit: {
               id: '编号',
               name: '分类名称',
               type: '分类类型',
               createTime: '创建时间'
               updateTime: '更新时间'
           }
           total: 1000
       },
       status: 1,
       msg: '获取分类成功'
   }
   ~~~



#### 3. 添加分类

1. API：POST/category

2. 参数：

   | 参数名 |  类型  | 是否必填 | 说明     | 示例 |
   | :----: | :----: | :------: | -------- | :--: |
   |  name  | string |    是    | 分类名称 | xxx  |
   |  type  | string |    是    | 分类类型 | xxxx |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '添加分类成功'
   }
   ~~~



#### 4. 删除分类

1. API：DELETE/category

2. 参数：

   |   参数名   |  类型  | 是否必填 | 说明     |   示例    |
   | :--------: | :----: | :------: | -------- | :-------: |
   | categoryId | string |    是    | 分类编号 | 4s4a5da54 |
   
3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '删除分类成功'
   }
   ~~~



#### 5. 修改分类

1. API：PUT/category

2. 参数：

   | 参数名 |  类型  | 是否必填 | 说明     | 示例 |
   | :----: | :----: | :------: | -------- | :--: |
   |   id   | string |    是    | 分类编号 | xxx  |
   |  name  | string |    是    | 分类名称 | xxx  |
   |  type  | string |    是    | 分类类型 | xxxx |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '修改分类成功'
   }
   ~~~



### 评论

#### 1. 根据文章编号获取评论

1. API：GET/comment

2. 参数：

   |  参数名   |  类型  | 是否必填 | 说明     |    示例    |
   | :-------: | :----: | :------: | -------- | :--------: |
   |  pageNum  | Number |    是    | 页码     |     1      |
   | pageSize  | Number |    是    | 页大小   | 10，默认10 |
   | articleId | string |    否    | 文章编号 | 1s5a6sa5d  |

3. 返回的结果

   ~~~json
   {
       data: {
           list: [
               {
                   id: '编号',
                   articleId: '文章id',
                   phone: '评论手机号',
                   userName: '用户名'
                   userSrc: '用户头像'
                   content: '内容',
                   createTime: '创建时间'
               }
           ],
           total: 1000
       },
       status: 1,
       msg: '获取文章评论列表成功'
   }
   ~~~



#### 2. 添加评论

1. API：POST/comment

2. 参数：

   |  参数名   |  类型  | 是否必填 | 说明       |   示例    |
   | :-------: | :----: | :------: | ---------- | :-------: |
   | articleId | string |    是    | 文章编号   | 4s4a5da54 |
   |   phone   | string |    是    | 评论手机号 |   xxxx    |
   |  content  | string |    是    | 内容       |   xxxx    |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '添加评论成功'
   }
   ~~~



#### 3. 删除评论

1. API：DELETE/comment

2. 参数：

   |  参数名   |  类型  | 是否必填 | 说明     |   示例    |
   | :-------: | :----: | :------: | -------- | :-------: |
   | commentId | string |    是    | 评论编号 | 4s4a5da54 |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '删除评论成功'
   }
   ~~~



### 留言

#### 1. 获取留言列表

1. API：GET/leving

2. 参数：

   |  参数名  |  类型  | 是否必填 | 说明   |    示例    |
   | :------: | :----: | :------: | ------ | :--------: |
   | pageNum  | Number |    是    | 页码   |     1      |
   | pageSize | Number |    是    | 页大小 | 10，默认10 |

3. 返回的结果

   ~~~json
   {
       data: {
           list: [
               {
                   id: '编号',
                   phone: '评论手机号',
                   userName: '用户名'
                   userSrc: '用户头像'
                   content: '内容',
                   createTime: '创建时间'
               }
           ],
           total: 1000
       },
       status: 1,
       msg: '获取留言列表成功'
   }
   ~~~



#### 2. 添加留言

1. API：POST/leving

2. 参数：

   | 参数名  |  类型  | 是否必填 | 说明       | 示例 |
   | :-----: | :----: | :------: | ---------- | :--: |
   | userId  | string |    是    | 评论手机号 | xxxx |
   | content | string |    是    | 内容       | xxxx |
   
3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '添加评论成功'
   }
   ~~~



#### 3. 删除留言

1. API：DELETE/leving

2. 参数：

   |  参数名   |  类型  | 是否必填 | 说明     |   示例    |
   | :-------: | :----: | :------: | -------- | :-------: |
   | leavingId | string |    是    | 留言编号 | 4s4a5da54 |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '删除留言成功'
   }
   ~~~

### demo

#### 1. 获取demo列表

1. API：GET/demo

2. 参数：

   |  参数名  |  类型  | 是否必填 | 说明       |    示例     |
   | :------: | :----: | :------: | ---------- | :---------: |
   | pageNum  | Number |    是    | 页码       |      1      |
   | pageSize | Number |    是    | 页大小     | 10， 默认10 |
   | demoName | string |    否    | 查询关键字 |    测试     |
   |  author  | string |    否    | 手机号查询 |   134434    |

3. 返回的结果

   ~~~json
   {
       data: {
           list: [
               {
                   id: '编号',
                   title: '标题',
                   author: '上传者手机号'
                   authorName: '上传者名称',
                   userSrc: '用户头像'
                   path: '路径',
                   downName: '下载名称'
                   downLoadNum: '下载次数'
                   readNum: '浏览次数'
                   likeNum: '收藏次数'
                   createTime: '创建时间'
                   updateTime: '更新时间'
               }
           ],
           total: 1000
       },
       status: 1,
       msg: '获取demo列表成功'
   }
   ~~~



#### 2. 添加demo

1. API：POST/demo

2. 参数：

   |  参数名  |  类型  | 是否必填 | 说明         | 示例 |
   | :------: | :----: | :------: | ------------ | :--: |
   |  title   | string |    是    | 标题         | xxx  |
   |  author  | string |    是    | 上传者手机号 | xxxx |
   |   path   | string |    是    | 路径         | xxx  |
   | downName | string |    是    | 下载名称     | xxx  |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '添加demo成功'
   }
   ~~~



#### 3. 删除demo

1. API：DELETE/demo

2. 参数：

   | 参数名 |  类型  | 是否必填 | 说明       |   示例    |
   | :----: | :----: | :------: | ---------- | :-------: |
   | demoId | string |    是    | demo编号   | 4s4a5da54 |
   | author | string |    是    | 作者手机号 |    xxx    |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '删除demo成功'
   }
   ~~~



#### 4. 修改分类

1. API：PUT/demo

2. 参数：

   |  参数名  |  类型  | 是否必填 | 说明     | 示例 |
   | :------: | :----: | :------: | -------- | :--: |
   |    id    | string |    是    | demo编号 | xxx  |
   |  title   | string |    是    | demo标题 | xxx  |
   |  author  | string |    是    | 上传者   | xxxx |
   |   path   | string |    是    | 路径     | xxx  |
   | downName | string |    是    | 下载名称 | xxx  |

3. 返回的结果

   ~~~json
   {
       data: null,
       status: 1,
       msg: '修改demo成功'
   }
   ~~~



#### 5. 根据phone获取demo

1. API：GET/demo/getByPhone

2. 参数：

   |  参数名  |  类型  | 是否必填 | 说明       |    示例     |
   | :------: | :----: | :------: | ---------- | :---------: |
   | pageNum  | Number |    是    | 页码       |      1      |
   | pageSize | Number |    是    | 页大小     | 10， 默认10 |
   | demoName | string |    是    | 查询关键字 |    测试     |

3. 返回的结果

   ~~~json
   {
       data: {
           list: [
               {
                   id: '编号',
                   title: '标题',
                   author: '上传者手机号'
                   authorName: '上传者名称',
                   path: '路径',
                   downName: '下载名称'
                   ndownLoadNum: '下载次数'
                   readNum: '浏览次数'
                   likeNum: '收藏次数'
                   createTime: '创建时间'
                   updateTime: '更新时间'
               }
           ],
           total: 1000
       },
       status: 1,
       msg: '获取demo列表成功'
   }
   ~~~

