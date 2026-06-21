const cartFormConfig = {
    header: {
        iconType: 'success',
        iconColor: '#157658',
        title: '购物车组件演示',
        subtitle: '以下表单组件数据均通过 Http 接口获取，运行时由 Mock 提供'
    },
    buttons: [
        { id: 'primary', type: 'primary', text: '提交订单', size: 'default' },
        { id: 'default', type: 'default', text: '继续购物', size: 'default' },
        { id: 'warn', type: 'warn', text: '清空购物车', size: 'mini' }
    ],
    checkboxGroup: {
        label: '配送方式（checkbox-group）',
        options: [
            { value: 'express', label: '快递配送', checked: true },
            { value: 'self', label: '到店自提', checked: false },
            { value: 'same-day', label: '同城急送', checked: false }
        ]
    },
    radioGroup: {
        label: '支付方式（radio-group）',
        options: [
            { value: 'wechat', label: '微信支付', checked: true },
            { value: 'balance', label: '余额支付', checked: false },
            { value: 'cod', label: '货到付款', checked: false }
        ]
    },
    switches: [
        { id: 'gift', label: '礼品包装', checked: false },
        { id: 'invoice', label: '需要发票', checked: true }
    ],
    input: {
        label: '收货人（input）',
        placeholder: '请输入收货人姓名',
        value: ''
    },
    textarea: {
        label: '备注（textarea）',
        placeholder: '选填，可填写配送要求',
        value: '',
        maxlength: 200
    },
    picker: {
        label: '配送时间（picker）',
        mode: 'selector',
        range: ['今天上午', '今天下午', '明天上午', '明天下午'],
        value: 0
    },
    pickerRegion: {
        label: '配送地区（picker region）',
        value: ['广东省', '广州市', '天河区']
    },
    pickerView: {
        label: '选择规格（picker-view / picker-view-column）',
        columns: [
            { values: ['1件', '2件', '3件', '4件', '5件'] },
            { values: ['标准装', '大包装', '家庭装'] }
        ],
        value: [0, 0]
    }
}

export {
    cartFormConfig
}
