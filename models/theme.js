import {Http} from '../utils/http.js'
import {Config} from '../utils/config.js'

class Theme{
    static  locationA = 't-1'
    static  locationE = 't-2'
    static  locationF = 't-3'
    static  locationH = 't-4'

    themes = []
    async getThemes(){
        const names = '{Theme.locationA},{Theme.locationE},{Theme.locationF},{Theme.locationH}'
        this.themes = await Http.request({
            url: '/theme/by/name',
            data:{
                names
            }
        })
    }

    async getHomeLocationA(){
        return this.themes.find(t => t.name === Theme.locationA)
    }

    async getHomeLocationE(){
        return this.themes.find(t => t.name === Theme.locationE)
    }
}

export {
    Theme
}