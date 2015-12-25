var obj = {arr : location.pathname.split('/')};
obj.url = 'http://'+location.host+'/'+obj.arr[1]+'/'+obj.arr[2];
obj.name = M_TOOL.empty(M_TOOL.getQueryString('name')) ? '' : decodeURIComponent(M_TOOL.getUrlVars('name'));
obj.img = M_TOOL.empty(M_TOOL.getQueryString('img')) ? '' : decodeURIComponent(M_TOOL.getQueryString('img'));
obj.sex = M_TOOL.empty(M_TOOL.getQueryString('sex')) ? '' : M_TOOL.getQueryString('sex');
(function($){
    function _init() {
        $.ajax({
            type: "post",
            dataType: "json",
            url: obj.url+'_ajax/',
            success: function(rs){
                //中奖记录
                if(rs.code == 1000){
                    rs.data.img = decodeURIComponent(rs.data.img);
                    rs.data.name = decodeURIComponent(rs.data.name);
                    $('.data-name').text(rs.data.name);
                    $('.data-avt').attr('src',rs.data.img);
                    $('.normal_loading').remove();
                    $('._show').show();
                    if(rs.data.sex == 1){
                        $('#bg').attr('src',M_INIT.__STATIC__+'/jpwebapp/images/pengyouquan/wanghon/nan.jpg');
                        $('#man').show();
                    }else{
                        $('#bg').attr('src',M_INIT.__STATIC__+'/jpwebapp/images/pengyouquan/wanghon/nv.jpg');
                        $('#woman').show();
                    }

                    wx.ready(function () {
                        var share_info ={
                            title: rs.data.name+"成了网红之后，朋友圈竟然变成这样",
                            desc: "",
                            link: obj.url
                            +'?name='+encodeURIComponent(rs.data.name)
                            +'&img='+encodeURIComponent(rs.data.img)
                            +'&sex='+rs.data.sex,
                            imgUrl: rs.data.img
                        };
                        wx.onMenuShareAppMessage(share_info);
                        wx.onMenuShareTimeline(share_info);
                    });

                }else if(rs.code == 2000){
                    location.href = decodeURIComponent(rs.data);
                }
            }
        });
    }
    //如果页面有数据 显示页面
    if(obj.name){
        $('.data-name').text(obj.name);
        $('.data-avt').attr('src',obj.img);
        $('.normal_loading').remove();
        $('._show').show();
        if(obj.sex == 1){
            $('#bg').attr('src',M_INIT.__STATIC__+'/jpwebapp/images/pengyouquan/wanghon/nan.jpg');
            $('#man').show();
        }else{
            $('#bg').attr('src',M_INIT.__STATIC__+'/jpwebapp/images/pengyouquan/wanghon/nv.jpg');
            $('#woman').show();
        }

        wx.ready(function () {
            var share_info ={
                title: obj.name+"成了网红之后，朋友圈竟然变成这样",
                desc: "",
                link: obj.url
                +'?name='+encodeURIComponent(obj.name)
                +'&img='+encodeURIComponent(obj.img)
                +'&sex='+obj.sex,
                imgUrl: obj.img
            };
            wx.onMenuShareAppMessage(share_info);
            wx.onMenuShareTimeline(share_info);
        });
    }else{
        _init();
    }




    $('#share_add').on('click',function(){
        $('#guide').show();
    });
    $('#guide').on('click',function(){
        $('#guide').hide();
    });


}(Zepto));