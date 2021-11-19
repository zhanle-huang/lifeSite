import axios from 'axios';
const baseUrl = '/lifeSite';
axios.defaults.timeout = 60000

axios.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log('错误')
    // Do something with response error
    return Promise.reject(error);
});

export const http = {
    get: (url, data) => {
        return axios({
            url: baseUrl + url,
            params: data,
            method: 'GET'
        })
    },
    post: (url, data) => {
        return axios({
            url: baseUrl + url,
            data: data,
            method: 'POST'
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    },
    put: (url, data) => {
        return axios({
            url: baseUrl + url,
            data: data,
            method: 'PUT'
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    },
    del: (url, data) => {
        return axios({
            url: baseUrl + url,
            params: data,
            method: 'DELETE'
        })
    },
}
