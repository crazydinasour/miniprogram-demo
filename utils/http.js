import {config} from '../config/config.js'
import {promisic} from './util.js'
import {getMockData} from '../mock/index.js'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

class Http {
    static async request({
        url,
        data,
        method = 'GET'
    }) {
        if (config.useMock) {
            if (config.mockDelay > 0) {
                await delay(config.mockDelay)
            }
            return getMockData(url, data, method)
        }

        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
        })
        return res.data
    }
}

export {
    Http
}