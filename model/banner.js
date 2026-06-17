import {Http} from '../utils/http.js'

class Banner{
    static locationB = 'b-1'
    static async getHomeLocationB(name){
        return await Http.request({
            url:'',
        })
    }
}

export {
    Banner
}