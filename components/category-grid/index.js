Component({
    properties: {
        grid:Array
    },
    data: {},
    methods: {
        onGridItemTap(e) {
            const { item } = e.currentTarget.dataset
            if (item.title === '猫粮') {
                wx.switchTab({ url: '/pages/category/category' })
            }
        }
    }
});
