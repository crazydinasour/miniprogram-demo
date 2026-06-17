import {Config} from '../config/config.js'
import {promisic} from './util.js'

class Http{
    static async request({
        url,
        data,
        method = 'GET'
    }){
        await promisic(wx.request({
            url: `${Config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
                appkey: Config.appkey
            }
        }))
    }
}

export{
    Http
}