import {Http} from '../utils/http.js'

class Banner{
    static locationB = 'b-1'
    static locationG = 'b-2'
    static async getHomeLocationB(name){
        return await Http.request({
            url:'',
        })
    }
    static async getHomeLocationG(name){
        return await Http.request({
            url:''
        })
    }
}

export {
    Banner
}