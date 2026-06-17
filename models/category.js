import Http from '../utils/http.js'
class Category{
    async getCategory(){
        return await Http.request({
            url:'/category/all'
        })
    }