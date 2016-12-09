// pages/venue/detail/detail.js
Page({
  data: {},
  onLoad: function (options) {
    var _self = this;
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: 'http://v.juhe.cn/nba/team_info_byId.php?key=311b8220823ee2d8f2f689b953afafae',
      data: { team_id: options.id },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        if (res && res.data && res.data.result) {
          var data = res.data.result;
          _self.setData({
            full_name: data.full_name,
            playersInfo: data.playersInfo,
            logo_link: data.logo_link,
            intro: data.intro
          })
          wx.hideToast();
        } else {
          console.log('请求成功，但是没有数据')
          wx.hideToast();
        }

      },
      fail: function () {
        console.log('接口累计调用次数超过100次啦')
        _self.setData({
          full_name: "湖人湖人",
          playersInfo: [a, b, c, d],
          logo_link: "../../../images/img01.png",
          intro: "这是详情页这是详情页这是详情页这是详情页这是详情页"
        })
      },
    })
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
  }
})