const COMMON_API = {
    // 获取用户配置
    getUserconfig : {
        method: 'get',
        url: "/user"
    },

    submitUserConfig : {
        method: 'post',
        url: '/postuser'
    },
}

export default COMMON_API;