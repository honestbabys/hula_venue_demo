
Page({
    data:{
        array: ["杭州", "温州", "嘉兴", "北京", "上海", "武汉"],
        index: 0,
        lowCourseList:[
            {id:'1',src:"/images/course_img02.png",title:'课程名称',newPrice:"10",oldPrice:'99'},
            {id:'1',src:"/images/course_img02.png",title:'课程名称',newPrice:"10",oldPrice:'99'},
            {id:'1',src:"/images/course_img02.png",title:'课程名称',newPrice:"10",oldPrice:'99'},
            {id:'1',src:"/images/course_img02.png",title:'课程名称',newPrice:"10",oldPrice:'99'},
            {id:'1',src:"/images/course_img02.png",title:'课程名称',newPrice:"10",oldPrice:'99'},
            {id:'1',src:"/images/course_img02.png",title:'课程名称',newPrice:"10",oldPrice:'99'}
        ],
        allCourseList:[
            {id:'1',src:"/images/course_img03.png",title:'可乐瑜伽',address:"黄龙体育中心",price:"30",recommend:true},
            {id:'2',src:"/images/course_img03.png",title:'可乐瑜伽',address:"黄龙体育中心",price:"30",recommend:false},
            {id:'3',src:"/images/course_img03.png",title:'可乐瑜伽',address:"黄龙体育中心",price:"30",recommend:true},
            {id:'4',src:"/images/course_img03.png",title:'可乐瑜伽',address:"黄龙体育中心",price:"30",recommend:false},
        ]
        
    },
    bindPickerChange: function (e) {
        this.setData({
            index: e.detail.value
        })
    },
})