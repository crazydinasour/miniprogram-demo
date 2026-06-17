class Http{
    static async request({
        url,
        data,
        method = 'GET'
    }){
        await promisic(wx.request({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
                appkey:config.appkey
            }
        }))
    }
}

export{
    Http
}