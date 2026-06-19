import {
    themes,
    bannerB,
    bannerG,
    gridCategories,
    activityD,
    themeESpu
} from './home.js'

function getMockData(url, data = {}) {
    if (url === '/theme/by/name') {
        const names = (data.names || '').split(',').filter(Boolean)
        if (names.length === 0) {
            return themes
        }
        return themes.filter(t => names.includes(t.name))
    }

    if (url === '/theme/name/t-2/spu') {
        return themeESpu
    }

    if (url === '/banner/name/b-1') {
        return bannerB
    }

    if (url === '/banner/name/b-2') {
        return bannerG
    }

    if (url === '/category/grid/all') {
        return gridCategories
    }

    if (url === '/activity/name/a-2') {
        return activityD
    }

    console.warn('[Mock] 未匹配的接口:', url, data)
    return null
}

export {
    getMockData
}
