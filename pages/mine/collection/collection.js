// pages/mine/collection/collection.js
Page({
  data:{
    tabArr:{
      headIndex:1,
      bodyIndex:1
    },
      venueList: [
            { id: '1', firstImg: "/images/img01.png", title: "街头篮球街头篮球", source: "黄龙体育中心黄龙体育中心", recommend: true, },
            { id: '2', firstImg: "/images/img01.png", title: "街头篮球街头篮球", source: "黄龙体育中心黄龙体育中心", recommend: false, },
        ],
         courseList: [
            { id: '1', firstImg: "/images/img02.png", title: "乐可瑜伽乐可瑜伽", source: "文二西路西城广场3楼", recommend: true, },
            { id: '2', firstImg: "/images/img02.png", title: "乐可瑜伽乐可瑜伽", source: "文二西路西城广场3楼", recommend: false, },
        ]

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  //tab切换
  tabChange:function(e){
    var id=e.target.dataset.id;
    this.setData({
      tabArr:{headIndex:id,bodyIndex:id}
    })
  }
})