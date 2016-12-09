//日期格式化
function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
//数字转字符串
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
//删除左右两端的空格
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
function rndNum(n) {
    var rndnum = '';
    for (var i = 0; i < n; i++) {
        rndnum += Math.floor(Math.random() * 10);
    }
    return rndnum;
}
// 浮点数相加
function accAdd(arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

module.exports = {
    formatTime: formatTime,
    accAdd: accAdd,
    trim: trim,
    rndNum:rndNum
}
