import axios from 'axios'

import service from './commonApi'

// service 循环遍历输出不同请求方法
let instance = axios.create ({
    baseUrl: "http://locasthost:9000/api",
    timeout:1000
})
const Http = {}; // 包裹请求方法的容器

for(let key in service) {
    let api = service[key]; // url,method
    // async :避免进入回调地狱
    Http[key] = async function(
        params, // 请求参数
        
    ) {
        
    }
}