
Page({
    data: {
        userName: "率伯恩",
        telephone: "18458101339",
        collection: {
            newsNum: 0
        },
        featuresList: [
            { name: "我的订单", url: "order/order" },
            { name: "我的二维码", url: "order/order" },
            { name: "邀请好友", url: "order/order" },
            { name: "意见反馈", url: "order/order" },
            { name: "关于我们", url: "order/order" }
        ]
    },

    onShow:function(){  //不用onLoad,被缓存会不起作用
        var userInfo=wx.getStorageSync('userInfo')
        this.setData({
            userName:userInfo.nickName
        })
    },
    outEnter: function () {
        wx.showModal({
            title: '提示',
            content: '确定退出？',
            success: function (res) {
                if (res.confirm) {
                    // wx.redirectTo({
                    //   url: '../index/index',                    
                    // })
                    wx.navigateTo({
                      url:"../index/index"
                    })
                }
            }
        })
    }
})