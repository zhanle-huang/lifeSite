### 用户表(users)

| 字段名       | 类型      | 大小 | 说明                                         | 描述                           |
| ------------ | --------- | ---- | -------------------------------------------- | ------------------------------ |
| phone        | varchar   | 11   | NOT NULL，主键                               | 手机号码                       |
| password     | varchar   | 16   | NOT NULL                                     | 用户登录密码                   |
| name         | varchar   | 20   | NULL                                         | 用户名                         |
| desc         | varchar   | 255  | NULL                                         | 用户简介                       |
| identityType | varchar   | 1    | NOT NULL, 默认1（普通用户），2（管理员用户） | 用户身份                       |
| src          | varchar   | 255  | NULL                                         | 用户头像，未设置的使用默认头像 |
| token        | varchar   | 16   | NULL                                         | token码                        |
| createTime   | timestamp |      | NULL                                         | 创建时间                       |
| updateTime   | timestamp |      | NULL                                         | 更新时间                       |

### 文章表：（articles）

| 字段名      | 类型      | 长度 | 说明                                               | 解释     |
| ----------- | --------- | ---- | -------------------------------------------------- | -------- |
| id          | varchar   | 16   | NOT NULL                                           | 文章的id |
| categoryId  | varchar   | 16   | NOT NULL，外码，参考表categsirys的id字段，级联更新 | 分类的id |
| title       | varchar   | 200  | NULL                                               | 文章标题 |
| author      | varchar   | 11   | NOT NULL，外码，参考表users的phone字段，级联更新   | 作者id   |
| content     | longblob  |      | NULL                                               | 内容     |
| readNum     | int       | 10   | 默认0                                              | 阅读次数 |
| recommedNum | int       | 10   | 默人0                                              | 评论次数 |
| likeNum     | int       | 10   | 默认0                                              | 点赞次数 |
| createTime  | timestamp |      | NULL                                               | 创建时间 |
| updateTime  | timestamp |      | NULL                                               | 更新时间 |



### 分类表：（categorys）

| 字段名     | 类型      | 长度 | 说明     | 解释     |
| ---------- | --------- | ---- | -------- | -------- |
| id         | varchar   | 16   | NOT NULL | 分类的id |
| name       | varchar   | 50   | NULL     | 分类名称 |
| typeName   | varchar   | 50   | NULL     | 类型     |
| createTime | timestamp |      | NULL     | 创建时间 |
| updateTime | timestamp |      | NULL     | 更新时间 |



### 文章收藏表：（articlecollect）

| 字段名     | 类型      | 长度 | 说明                                                   | 解释     |
| ---------- | --------- | ---- | ------------------------------------------------------ | -------- |
| id         | varchar   | 16   | NOT NULL                                               | 收藏id   |
| articleId  | varchar   | 16   | NOT NULL，外码，参考表articles的id字段，级联删除、更新 | 文章的id |
| phone      | varchar   | 11   | NOT NULL，外码，参考表users的phone字段，级联删除、更新 | 手机号   |
| createTime | timestamp |      | NULL                                                   | 收藏时间 |



### demo收藏表：（democollect）

| 字段名     | 类型      | 长度 | 说明                                                   | 解释     |
| ---------- | --------- | ---- | ------------------------------------------------------ | -------- |
| id         | varchar   | 16   | NOT NULL                                               | 收藏id   |
| demoId     | varchar   | 16   | NOT NULL，外码，参考表demo的id字段，级联删除、更新     | demo的id |
| phone      | varchar   | 11   | NOT NULL，外码，参考表users的phone字段，级联删除、更新 | 手机号   |
| createTime | timestamp |      | NULL                                                   | 收藏时间 |



### 评论表：（articlecomments）

| 字段名     | 类型      | 长度 | 说明                                                   | 解释     |
| ---------- | --------- | ---- | ------------------------------------------------------ | -------- |
| id         | varchar   | 16   | NOT NULL                                               | 评论的id |
| articleId  | varchar   | 16   | NOT NULL，外码，参考表articles的id字段，级联删除和更新 | 文章的id |
| phone      | varchar   | 11   | NOT NULL,外码，参考表users的phone字段，级联删除、更新  | 手机号   |
| content    | varchar   | 500  | NULL                                                   | 评论内容 |
| createTime | timestamp |      | NULL                                                   | 时间     |



### 回复表：（articlereplys）

| 字段名    | 类型      | 长度 | 说明                                                   | 解释           |
| --------- | --------- | ---- | ------------------------------------------------------ | -------------- |
| id        | varchar   | 16   | NOT NULL                                               | 回复的id       |
| commentId | varchar   | 16   | NOT NULL,外码，参考表comments的id字段，级联删除、更新  | 评论的id       |
| phone     | varchar   | 11   | NOT NULL,外码，参考表users的phone字段，级联删除、更新  | 回复的手机号   |
| bePhone   | varchar   | 11   | NOT NULL，外码，参考表users的phone字段，级联删除、更新 | 被回复的手机号 |
| content   | varchar   | 500  | NULL                                                   | 回复内容       |
| creaTime  | timestamp |      | NULL                                                   | 时间           |

### 留言表：（leaving）

| 字段名     | 类型      | 长度 | 说明                                                  | 解释     |
| ---------- | --------- | ---- | ----------------------------------------------------- | -------- |
| id         | varchar   | 16   | NOT NULL                                              | 留言的id |
| phone      | varchar   | 11   | NOT NULL,外码，参考表users的phone字段，级联删除、更新 | 评论的id |
| content    | varchar   | 255  | NULL                                                  | 留言内容 |
| createTime | timestamp |      | NULL                                                  | 创建时间 |



### demo表：（demo）

| 字段名       | 类型      | 长度 | 说明                                         | 解释     |
| ------------ | --------- | ---- | -------------------------------------------- | -------- |
| id           | varchar   | 16   | NOT NULL                                     | demo的id |
| title        | varchar   | 255  | NULL                                         | 标题     |
| author       | varchar   | 11   | 外码，参照表users的phone字段，级联更新和删除 | 手机号   |
| path         | varchar   | 255  | NULL                                         | 路径     |
| downName     | varchar   | 50   | NULL                                         | 下载名称 |
| ndownLoadNum | int       | 10   | 0                                            | 下载量   |
| readNum      | int       | 10   | 0                                            | 浏览量   |
| likeNum      | int       | 10   | 0                                            | 收藏量   |
| createTime   | timestamp |      | NULL                                         | 创建时间 |
| updateTime   | timestamp |      | NULL                                         | 更新时间 |



### 首页轮播图

| 字段名     | 类型      | 长度 | 说明     | 解释       |
| ---------- | --------- | ---- | -------- | ---------- |
| id         | varchar   | 16   | NOT NULL | 轮播图的id |
| src        | varchar   | 255  | NULL     | 路径       |
| desc       | varchar   | 255  | NULL     | 文字描述   |
| createTime | timestamp |      | NULL     | 创建时间   |
| updateTime | timestamp |      | NULL     | 更新时间   |



### 视图

#### 文章视图：（articleview）

| 字段名       | 类型      | 长度 | 说明                                               | 解释     |
| ------------ | --------- | ---- | -------------------------------------------------- | -------- |
| id           | varchar   | 16   | NOT NULL                                           | 文章的id |
| categoryId   | varchar   | 16   | NOT NULL，外码，参考表categsirys的id字段，级联更新 | 分类的id |
| categoryName | varchar   | 50   | NULL                                               | 分类名称 |
| categoryType | varchar   | 50   | NULL                                               | 类型     |
| title        | varchar   | 200  | NULL                                               | 文章标题 |
| author       | varchar   | 11   | NOT NULL，外码，参考表users的phone字段，级联更新   | 作者id   |
| content      | longblob  |      | NULL                                               | 内容     |
| readNum      | int       | 10   | 默认0                                              | 阅读次数 |
| recommedNum  | int       | 10   | 默人0                                              | 评论次数 |
| likeNum      | int       | 10   | 默认0                                              | 点赞次数 |
| createTime   | timestamp |      | NULL                                               | 创建时间 |
| updateTime   | timestamp |      | NULL                                               | 更新时间 |



### 评论视图：（articlecommentview）

| 字段名     | 类型      | 长度 | 说明                                                   | 解释                           |
| ---------- | --------- | ---- | ------------------------------------------------------ | ------------------------------ |
| id         | varchar   | 16   | NOT NULL                                               | 评论的id                       |
| articleId  | varchar   | 16   | NOT NULL，外码，参考表articles的id字段，级联删除和更新 | 文章的id                       |
| phone      | varchar   | 11   | NOT NULL,外码，参考表users的phone字段，级联删除、更新  | 手机号                         |
| userName   | varchar   | 20   | NULL                                                   | 用户名                         |
| userSrc    | varchar   | 255  | NULL                                                   | 用户头像，未设置的使用默认头像 |
| content    | varchar   | 500  | NULL                                                   | 评论内容                       |
| createTime | timestamp |      | NULL                                                   | 时间                           |



### 留言视图：（leavingview）

| 字段名     | 类型      | 长度 | 说明                                                  | 解释                           |
| ---------- | --------- | ---- | ----------------------------------------------------- | ------------------------------ |
| id         | varchar   | 16   | NOT NULL                                              | 留言的id                       |
| phone      | varchar   | 11   | NOT NULL,外码，参考表users的phone字段，级联删除、更新 | 评论的id                       |
| userName   | varchar   | 20   | NULL                                                  | 用户名                         |
| userSrc    | varchar   | 255  | NULL                                                  | 用户头像，未设置的使用默认头像 |
| content    | varchar   | 255  | NULL                                                  | 留言内容                       |
| createTime | timestamp |      | NULL                                                  | 创建时间                       |



### demo表：（demo）

| 字段名       | 类型      | 长度 | 说明                                         | 解释                           |
| ------------ | --------- | ---- | -------------------------------------------- | ------------------------------ |
| id           | varchar   | 16   | NOT NULL                                     | demo的id                       |
| title        | varchar   | 255  | NULL                                         | 标题                           |
| author       | varchar   | 11   | 外码，参照表users的phone字段，级联更新和删除 | 手机号                         |
| userName     | varchar   | 20   | NULL                                         | 用户名                         |
| userSrc      | varchar   | 255  | NULL                                         | 用户头像，未设置的使用默认头像 |
| path         | varchar   | 255  | NULL                                         | 路径                           |
| downName     | varchar   | 50   | NULL                                         | 下载名称                       |
| ndownLoadNum | int       | 10   | 0                                            | 下载量                         |
| readNum      | int       | 10   | 0                                            | 浏览量                         |
| likeNum      | int       | 10   | 0                                            | 收藏量                         |
| createTime   | timestamp |      | NULL                                         | 创建时间                       |
| updateTime   | timestamp |      | NULL                                         | 更新时间                       |

