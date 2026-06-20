Component({
    properties: {
        grid:Array
    },
    data: {},
    methods: {
        onGridItemTap(e) {
            const { item } = e.currentTarget.dataset
            this.triggerEvent('itemtap', { item })
        }
    }
});
