import { Http } from '../utils/http.js'

class Cart {
    static async getFormConfig() {
        return await Http.request({
            url: '/cart/form/config'
        })
    }
}

export {
    Cart
}
