import { http as $http } from './http.js';
// 文章模块请求
export const artcleReq = {
    getTagList: (param = {}) => {
        return $http.get('/category', param);
    },
    getArticleList: (param) => {
        return $http.get('/article', param);
    }
}
//demo模块请求
export const demoReq = {
    // 获取demo列表
    getDemoList: (param = {}) => {
        return $http.get('/demo', param);
    },
    // 添加demo收藏
    addDemoCollect: (param = {}) => {
        return $http.post('/collect/demo', param);
    },
    // 删除demo收藏
    delDemoCollect: (param = {}) => {
        return $http.del('/collect/demo', param);
    },
}

export const userReq = {
    // 获取短信验证码
    getSms: (param = {}) => {
        return $http.get(`/users/sms/${param.phone}`, {});
    },
    // 注册
    register: (param ={}) => {
        return $http.post('/user/register', param);
    },
    // 登录
    login: (param ={}) => {
        return $http.post('/user/login', param);
    },
}

// 留言模块
export const leavingReq = {
    // 添加留言
    addLeving: (param ={}) => {
        return $http.post('/leaving', param);
    },
    // 获取留言列表
    getLevingList: (param ={}) => {
        return $http.get('/leaving', param);
    },
}

// 公共模块
export const commonReq = {
    // 获取轮播图
    getCourselList: (param ={}) => {
        return $http.get('/common/carousel', param);
    },
}