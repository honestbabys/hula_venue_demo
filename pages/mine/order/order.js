// pages/mine/order/order.js
var utils = require('../../../utils/util.js');
Page({
  data: {
    myOrders: [
      { id: '1', address: "黄龙体育中心", state: 1, sport: "羽毛球", totalPrice: 20.00, fields: [{ time: "08月22日 08：00-12：00", fieldName: '3号场地名称', }, { time: "08月23日 08：00-12：00", fieldName: '3号场地名称', }] },
      { id: '2', address: "黄龙体育中心", state: 2, sport: "篮球", totalPrice: 22.00, fields: [{ time: "08月22日 08：00-12：00", fieldName: '3号场地名称', }, { time: "08月23日 08：00-12：00", fieldName: '3号场地名称', }] },
      { id: '3', address: "黄龙体育中心", state: 3, sport: "台球", totalPrice: 24.00, fields: [{ time: "08月22日 08：00-12：00", fieldName: '3号场地名称', }, { time: "08月23日 08：00-12：00", fieldName: '3号场地名称', }] },
    ],
  },
  onLoad: function (options) {
    // 没有辅助函数，初始时需自己循环更改
    //  console.log(this.data.myOrders)
    var myOrders = this.data.myOrders;
    for (var i = 0; i < myOrders.length; i++) {
      switch (myOrders[i].state) {
        case 1:
          myOrders[i].state = '已支付';
          break;
        case 2:
          myOrders[i].state = '待支付';
          break;
        case 3:
          myOrders[i].state = '已取消';
          break;
      }
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  //上拉加载
  loadMore: function () {
    var _self = this;
    wx.showNavigationBarLoading()

    wx.request({
      url: 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=6',
      data: {},
      method: 'GET',
      success: function (res) {
        var _myOrders = _self.data.myOrders.concat(_self.data.myOrders)
        for (var i = 3; i < _myOrders.length; i++) {
          _myOrders[i].id = utils.rndNum(10);
        }
        _self.setData({
          myOrders: _myOrders
        })
        wx.hideNavigationBarLoading()
      },
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    var _self = this;
    wx.showNavigationBarLoading()
    wx.request({
      url: 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=6',
      data: {},
      method: 'GET',
      success: function (res) {
        _self.setData({
          myOrders: [_self.data.myOrders[1]]
        })
        wx.hideNavigationBarLoading()
      },
    })
  }
})