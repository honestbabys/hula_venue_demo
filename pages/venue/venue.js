
var utils=require('../../utils/util.js');
Page({
    data: {
        array: ["杭州", "温州", "嘉兴", "北京", "上海", "武汉"],
        index: 0,
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        imgUrls: [
            { id: "1", src: "/images/swiper.png" },
            { id: "2", src: "/images/swiper.png" },
            { id: "3", src: "/images/swiper.png" },
        ],
        sports: [
            { id: "1", name: "羽毛球", active: true },
            { id: "2", name: "篮球", active: false },
            { id: "3", name: "网球", active: false },
            { id: "4", name: "台球", active: false },
            { id: "5", name: "全部", active: false },
        ],
        date: "8月22日",
        time: "08：00-12：00",
        venueList: [
            { id: '1', firstImg: "/images/img01.png", title: "街头篮球街头篮球", address: "黄龙体育中心黄龙体育中心", recommend: true, },
            { id: '2', firstImg: "/images/img01.png", title: "街头篮球街头篮球", address: "黄龙体育中心黄龙体育中心", recommend: false, },
            { id: '3', firstImg: "/images/img01.png", title: "街头篮球街头篮球", address: "黄龙体育中心黄龙体育中心", recommend: true, },
            { id: '4', firstImg: "/images/img01.png", title: "街头篮球街头篮球", address: "黄龙体育中心黄龙体育中心", recommend: false, },
        ]

    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
    },
    //tab切换
    switchSport: function (e) {
        for (var i = 0; i < this.data.sports.length; i++) {
            if (this.data.sports[i].id === e.target.dataset.id) {
                this.data.sports[i].active = true;
            } else {
                this.data.sports[i].active = false;
            }
        }
        this.setData({ sports: this.data.sports })
    },
    onLoad: function (options) {

    },
    loadMore: function () {
        wx.showToast({
            title: '加载更多',
            icon: 'loading',
            duration: 10000
        })
        var _self = this;
        wx.request({
            url: 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=6', //聚合数据
            data: {},
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                var data=_self.data.venueList.concat(res.data.result.list);
                //小程序中不会渲染重复的数据，现将id改成不同的
                for(var i=4;i<data.length;i++){
                    data[i].id=utils.rndNum(10);
                }
                _self.setData({
                    venueList: data   
                })
                wx.hideToast()
                console.log(_self.data.venueList)
            }
        })
        
    }
})


//alt+shift+F   格式化代码