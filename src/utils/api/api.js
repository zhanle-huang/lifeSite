import { $http } from './apiConfig.js';

export const API = {
    // 用户相关接口
    userReq: {
        // 获取短信验证码
        getSms: (params = {}) => {
            return $http.get(`/users/sms/${params.phone}`, params)
        }
    }
}