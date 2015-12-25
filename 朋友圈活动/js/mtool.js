/**
 * yebo
 */
var M_INIT = {
    __STATIC__ : 'http://s.juancdn.com',
    __UPLOAD__ : 'http://s1.juancdn.com',
    __M_JUANPI__ : 'http://m.juanpi.com',
    __WX_JUANPI__ : 'http://m.juanpi.com',
    __COOKIE_PATH__ : {expires: 1, path: "/" ,domain:'juanpi.com'}
};

var M_TOOL = {
    trim: function (a) {
        return a.replace(/(^\s*)|(\s*$)/g, "").replace(/(^\u3000*)|(\u3000*$)/g, "")
    },
    setCookie: function (a, c, b) {
        b = b || {};
        if (c === null) c = "",
            b.expires = -1;
        var d = "";
        if (b.expires &&
            (typeof b.expires == "number" || b.expires.toUTCString)) typeof b.expires == "number" ? (d = new Date, d.setTime(d.getTime() + b.expires * 864E5)) : d = b.expires,
            d = "; expires=" + d.toUTCString();
        var e = b.path ? "; path=" + b.path : "",
            f = b.secure ? "; secure" : "",
            h = "";
        null != b.domain || void 0 != b.domain ? h = "; domain=" + b.domain : (h = document.domain.toString().split("."), h = "; domain=." + h[1] + "." + h[2]);
        document.cookie = [a, "=", encodeURIComponent(c), d, e, h, f].join("")
    },
    getCookie: function (a) {
        a = document.cookie.match(RegExp("(^| )" + a + "=([^;]*)(;|$)"));
        if (a != null) return unescape(a[2]);
        return ""
    },
    empty : function (a) {
        return void 0 === a || null === a || "" === a
    },
    emptyObj : function (a) {
        for (var c in a) return !1;
        return !0
    },
    getQueryString : function (a) {
        if (RegExp("(^|\\?|&)" + a + "=([^&]*)(\\s|&|$)", "i").test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " "));
        return ""
    },
    setAppShare : function(shareUrl,shareTitle,shareContent,shareImgUrl){
        if(typeof window.webviewClickListener != 'undefined' && typeof window.webviewClickListener.setShareContent != 'undefined'){
            window.webviewClickListener.setShareContent(shareUrl,shareTitle,shareContent,shareImgUrl);
        }
    },
    getUrlVars : function(a){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            if(a == hash[0]){ return hash[1] ;}
        }
        return '';
    },
    goAppLogin:function(u){
        location.href = 'http://go_login/redirectUrl='+u;
    }
};
var M_VERIFY = {
    isPhoneNumber: function (str) {
        str = M_TOOL.trim(str);return /^0?1[34578]\d{9}$/.test(str);
    },
    isCaptchaCode : function(str) {
        return /^[1-9]\d{5}$/.test(str);
    },
    isNumber : function(str) {
        str = M_TOOL.trim(str);
        return /^[0-9]*$/.test(str);
    }
};

var __XD_USER__ = {uid:'',pic:'',nick:'',sign:''};
__XD_USER__.uid = M_TOOL.empty(M_TOOL.getCookie('s_uid'))?'':M_TOOL.getCookie('s_uid');
__XD_USER__.pic = M_TOOL.empty(M_TOOL.getCookie('s_pic'))?'':__HOST_IMAGE__+decodeURIComponent(M_TOOL.getCookie('s_pic'));
__XD_USER__.nick = M_TOOL.empty(M_TOOL.getCookie('s_name'))?'':decodeURIComponent(M_TOOL.getCookie('s_name'));
__XD_USER__.sign = M_TOOL.empty(M_TOOL.getCookie('s_sign'))?'':decodeURIComponent(M_TOOL.getCookie('s_sign'));
var M_CHECK = {
    check_login: function () {
        return M_TOOL.empty(__XD_USER__.uid)  ? false : true;
    }
};

var JOA = {
    n:0,
    browser:{
        v: (function(){
            var u = navigator.userAgent, app = navigator.appVersion, p = navigator.platform;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                UCB: u.match(/UCBrowser/i) == "UCBrowser",
                QQB: u.match(/MQQBrowser/i) == "MQQBrowser",
                win: p.indexOf('Win') > -1,//判断是否是WIN操作系统
                mac: p.indexOf('Mac') > -1//判断是否是Mac操作系统
            };
        })()
    },
    //设置应用打开地址和下载地址
    setAppInfo:{
        iosUrl : "juanpi://m.juanpi.com/", //ios应用地址
        androidUrl : "juanpi://m.juanpi.com/", //android应用地址
        download : false, //下载开关
        downloadUrl : "http://a.app.qq.com/o/simple.jsp?pkgname=com.juanpi.ui" //应用下载地址
    },
    //使用iframe打开手机上的应用
    iframe2open:function(){
        this.n = (new Date).getTime();
        var i = document.createElement("iframe");
        i.src = this.browser.v.ios ? this.setAppInfo.iosUrl : this.setAppInfo.androidUrl;
        i.style.display = "none";
        document.body.appendChild(i);
    },
    //打开成功进入应用，失败就进入下载页面
    jump2download:function(){
        var t = null;
        clearTimeout(t);
        t = setTimeout(function () {
            var s = (new Date).getTime();
            if(400 >= s-JOA.n && JOA.setAppInfo.download === true){
                window.location.href = JOA.setAppInfo.downloadUrl;
            }
        }, 200);
    }
};

