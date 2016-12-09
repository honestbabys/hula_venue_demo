// pages/login/login.js
//删除左右两端的空格
function trim(str){ 
　　  return str.replace(/(^\s*)|(\s*$)/g, "");
}
Page({
  data: {
    login: true,
    placeholder: 'placeholder',
    toastOptions: {
      tip: '',
      show: false,
    },
    radioItems: [
      { name: '1', value: '设计师' },
      { name: '2', value: '程序员', checked: 'true' },
      { name: '3', value: '医生' },
      { name: '4', value: '老师' },
      { name: '0', value: '其他' },
    ],
    code: null
  },

  //tab切换
  onLoginActive: function () {
    this.setData({
      login: true
    })
  },
  onRegisterActive: function () {
    this.setData({
      login: false
    })
  },
  //关闭自定义消息框
  hideToast: function () {
    this.setData({
      toastOptions: {
        toast: { tip: '', show: false }
      }
    })
  },
  //验证手机号
  testTel: function (tel) {
    var reg = /^1[34578]\d{9}$/;
    var phone = typeof tel === 'string' ? tel : tel.detail.value;   //前者为登录,后者为注册tel实际是e对象
    if (!reg.test(phone) && phone) {
      this.setData({
        toastOptions: { tip: '手机号格式有误', show: true }
      })
      return false;
    }
  },
  //点击登录
  formSubmit: function (e) {
    var tel = e.detail.value.loginTelephone;
    var password = e.detail.value.loginPassword;
    this.testTel(tel);
    if(!trim(tel)||!trim(password)){
      this.setData({
        toastOptions: { tip: '手机号、密码不能空', show: true }
      })
      return
    }else if (tel === '15555555555' && password === "123456") {
      wx.navigateTo({
        url: '../venue/venue',
      })
    } else {
      this.setData({
        toastOptions: { tip: '手机号或密码有误', show: true }
      })
      return false;
    }

    console.log(e.detail.value);
  },
  //模拟获取验证码
  getRegisterCode: function () {
    this.setData({
      code: 1234
    })
  },
  //单选按钮
  radioChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  //点击注册
  formSubmit2: function (e) {
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (this.data.radioItems[i].checked && this.data.radioItems[i].checked === "true") {
        e.detail.value.job = this.data.radioItems[i].value;
        break;
      }
    }
    var tips = { telephone: '手机号不能为空', password: '密码不能为空', password2: '确认密码不能为空', code: '验证码不能为空' }
    for (var key in e.detail.value) {
      if (!e.detail.value[key] && key!=='sex') {
        this.setData({
          toastOptions: { tip: tips[key], show: true }
        })
        break;
      }
    }
    if(e.detail.value.password!==e.detail.value.password2){
      this.setData({
          toastOptions: { tip: '两次密码不一致', show: true }
        })
        return false;
    }
     console.log(e.detail.value)
  }
})