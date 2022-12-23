import axios from "axios";
// 创建axios实例
const service = axios.create({
    baseURL: "https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api",
    timeout: 5000,
    headers: {
        "content-Type":"application/json;charset=utf-8"
    }
})
//
