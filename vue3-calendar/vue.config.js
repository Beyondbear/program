module.exports = {
    devServer:{
        // 关闭eslint校验
        overlay:{
            warnning:false,
            errors:false
        },
        // 代理服务器
        proxy:{
            '/api':{
                target:'http://v.juhe.cn',
                changeOrigin:true,
                ws:true,
                secure:false,
                pathRewrite:{
                    '^/api':'',
                }
            }
        }
    },
    lintOnSave:false
}