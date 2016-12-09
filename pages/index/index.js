//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '进入呼啦场馆',
    userInfo: {}
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  enterVenue:function(){
      wx.redirectTo({   
        url: '../login/login',
       
      })
      //  wx.navigateTo({     
      //   url: '../venue/venue',
       
      // })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      // wx.setStorageSync({
      //   key: 'userInfo',
      //   data: userInfo,
      // })
      wx.setStorageSync("userInfo",userInfo)
    })
  }
})
