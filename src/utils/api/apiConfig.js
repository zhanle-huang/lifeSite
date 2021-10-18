import axios from 'axios';

const get = (url, params) {
    return axios({
        method: 'get',
        url: url,
        data: params
    })
}

const post = (url, params) {
    return axios({
        method: 'post',
        url: url,
        data: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    })
}

const jsonPost = (url, params) {
    return axios({
        method: 'post',
        url: url,
        data: params,
        headers: { 'Content-Type': 'application/json'}
    })
}

export const $http = {
    get,
    post,
    jsonPost
}