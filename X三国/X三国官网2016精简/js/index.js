var PAGE = function() {
		var e = {
			imgPreLoad: function() {
				var t = ["http://res.kf.netease.com/pc/gw/20151225150450/img/appointment-bg_25f9da4.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/aside-bg_2b6be25.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/aside-btn1_5697e09.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/aside-btn2_ce03d94.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/attention-bg_fcb7385.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/attention-wx1_65a6b5e.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/attention-wx2_9a3a900.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/attention-yx1_ed4ba0c.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/attention-yx2_5fdbba5.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/bg1.BAK_6ec9e5d.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/bg1_6ec9e5d.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/bg2_a8aa0bc.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/bg3_5cbbdb4.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/bg4_a815ebb.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/bg5_7bc9d8f.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-android1_e08c924.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-android2_02e693b.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-appointment1_e4203de.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-appointment2_64a8e86.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-down1_4df8926.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-down2_3697fac.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-gift1_73f2491.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-gift2_f755ec3.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-ios1_ea0e3bb.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-ios2_f5c0265.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-kefu1_f3807bf.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-kefu2_b207460.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr1_9086141.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr1s_5255451.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr2_83b3c7d.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr2s_d3213da.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr3_23b9721.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr3s_6bbfebc.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr4_ce5bded.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr4s_f87aa8c.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr5_12f85d1.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-qr5s_d0ff3cd.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-slide1_d989e51.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-slide2_09077aa.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-totop1_6691b40.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-totop2_7508842.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-up1_282f372.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-up2_e45e8da.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-video-i_cf181ca.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-video_eb6b719.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-yuyue1_dabb163.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/btn-yuyue2_4dbee77.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/close_btn_9bf4dc5.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/cloud1_c1404f8.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/cloud2_71494d1.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/cloud3_1d6c677.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/cloud4_a3ca2c4.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/cloud5_e4fd7af.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/dialog-video_f0d4301.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/dialog-yuyue_8d1243c.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/download-bg_f3fbef6.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/download_d74de81.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/feature1_f7fd8ad.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/feature2_5be9edd.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/feature3_dd9e2f8.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/feature4_8a75427.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/gf-ewm_62d0574.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/gift_bedcf75.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/icon-failure_6a869c6.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/icon-movie_c2a35d7.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/icon-repeat_968e914.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/icon-success_b17b75c.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/loading-bg_cf9760e.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/loading-wood_c5a274e.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/logo_92cb48a.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/movie-logo_368be89.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/nav-bg_5dd77cd.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/nav-btn_2954fd3.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/new-more1_139bb95.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/new-more2_c3db081.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/new-tab_61a8b00.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-android_bf7b561.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-appointment_64d5f89.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-aside_bfb62fd.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-aside2_8ec3643.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-bg_6f3065e.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-icon_bf6d963.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-ios_431b0a0.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-mb_627ef72.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-tt_a3660ac.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-wc1_a50cadb.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/ny-wc2_889284c.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part1-effects1_45bea85.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part1-slogan1.bak_dfba976.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part1-slogan1.bak2_dfba976.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part1-slogan1_ff0e38f.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part1-slogan2.bak_d1f50b3.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part1-slogan2_0b14aea.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part2-effects1_98d5aac.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part2-slogan1_ab6168b.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part2-slogan2_c85701e.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part3-effects1_2ea3040.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part3-effects2_3b7f31b.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part3-effects3_384fb16.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part3-slogan1_f5a9ea9.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part3-slogan2_84ae79d.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part4-effects1_4f63094.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part4-effects2_5cd7859.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part4-slogan1_3ca8e58.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part4-slogan2_9fc9eb8.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part5-effects1_60b8cb7.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part5-effects2_9c8ca71.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part5-effects3_39aadc9.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part5-effects4_ef2f510.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part5-effects5_5275c6b.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part5-effects6_276f589.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part5-effects7_88e1228.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part5-slogan1_f443b50.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/part5-slogan2_7888c52.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/phone-num_22c10dc.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/qr-bg_730996b.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/qr_658978b.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/scroll-bg_aa329b9.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/scroll-left_fe45c13.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/scroll-right_e37a265.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/share_e5cf3b6.jpg", "http://res.kf.netease.com/pc/gw/20151225150450/img/system1_4f5b98f.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/system2_b008265.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/tan-close_6634a56.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/wechat_6b2294a.png", "http://res.kf.netease.com/pc/gw/20151225150450/img/yixin_0a0ef4c.png"],
					n = 0,
					a = t.length;
				$.imgpreload(t, {
					each: function() {
						++n;
						var e = parseInt(n / a * 100);
						$("#load-precent").html(e + "%"), $("#loading .cont").css("width", e + "%")
					},
					all: function() {
						$("#loading").fadeOut(), e.setSwiper()
					}
				})
			},
			setShare: function() {
				{
					var e = ($("#share_url").html(), $("#share_pic").attr("data-src")),
						t = $("#share_desc").html();
					$("#share_title").html()
				}
				nie.use(["nie.util.shareV5"], function() {
					share = nie.util.share({
						fat: "#NIE-share",
						type: 1,
						defShow: [23, 22, 2, 3],
						title: t,
						img: e
					})
				})
			},
			respond: function() {
				var e, t = $(".swiper-container"),
					n = $(".page-1 .wrap"),
					a = $(".page-2 .wrap");
				$(window).resize(function() {
					e = $(window).height(), t.css({
						height: e
					}), n.css({
						height: e > 880 && 975 > e ? e : 975
					}), a.css({
						height: e > 1135 ? 1135 : 860 > e ? 900 : e
					}), $(".btn-go.up").css({
						top: e > 900 ? 45 : 0
					})
				}).trigger("resize")
			},
			setSwiper: function() {
				$(".swiper-container .swiper-slide").size(), $(".scroll");
				window.mySwiper = new Swiper(".swiper-container", {
					mode: "vertical",
					mousewheelControl: !0,
					simulateTouch: !1,
					slidesPerView: "auto",
					resizeReInit: !0,
					calculateHeight: !0,
					speed: 200,
					onSlideChangeStart: function() {
						0 == mySwiper.activeIndex ? $(".btn-go.down").show() : $(".btn-go.down").hide()
					}
				}), $(".btn-go.down").bind("click", function() {
					mySwiper.swipeTo(1)
				}), $(".btn-go.up").bind("click", function() {
					mySwiper.swipeTo(0)
				}), e.switchBg()
			},
			attention: function() {
				var e = $(".attention");
				e.find("a").bind("mouseenter", function() {
					e.find("div").eq(e.find("a").index(this)).show()
				}).bind("mouseleave", function() {
					e.find("div").eq(e.find("a").index(this)).hide()
				})
			},
			slidePic: function() {
				function e() {
					a.stop().animate({
						left: -s * g + "px"
					}), $(".slide .slide-btn li").removeClass("cur").eq(g).addClass("cur")
				}
				var t, n = $(".slide"),
					a = n.find(".slide-pic"),
					s = n.width(),
					p = 0,
					g = 0;
				
				$(".slide .slide-btn li").live("mouseenter", function() {
					g = $(this).index(), e()
				}), n.bind("mouseenter", function() {
					clearInterval(t)
				}).bind("mouseleave", function() {
					t = setInterval(function() {
						g++, g >= p && (g = 0), e()
					}, 5e3)
				}).trigger("mouseleave")
			},
			newTab: function() {
				var e = $(".news-tab li"),
					t = $(".news-list"),
					n = 0;
				e.hover(function() {
					n = e.index(this), e.removeClass("cur").eq(n).addClass("cur"), t.removeClass("cur").eq(n).addClass("cur")
				});
				for (var a = 0; a < t.length; a++) t.eq(a).find("a").eq(0).addClass("cur")
			},
			switchBg: function() {
				function e() {
					a.removeClass("cur").eq(i).addClass("cur"), p.removeClass("active").eq(i).addClass("active"), g.removeClass("active").eq(i).addClass("active"), s.removeClass(), s.css("zoom", s.css("width")), s.addClass("skin-" + (i + 1) + " animated"), c.removeClass("animated").eq(i).addClass("animated"), 0 == i && (clearTimeout(n), $(".part1 .flash").hide(), n = setTimeout(function() {
						$(".part1 .flash").show()
					}, 1200))
				}
				var t, n, a = $(".aside a"),
					s = $("#skin"),
					p = $(".bg div"),
					g = $(".cloud div"),
					c = $(".part"),
					i = 0;
				a.bind("click", function() {
					i = a.index(this), a.eq(i).hasClass("cur") || (mySwiper.swipeTo(0), e(), clearInterval(t), t = setInterval(function() {
						i++, i >= a.length && (i = 0), e()
					}, 7e3))
				}).eq(i).trigger("click")
			},
			btnQr: function() {
				function e() {
					$("#fade").fadeOut(), t.hide().removeClass("animated"), n.hide()
				}
				var t = $("#dialog-qr"),
					n = $("#close-btn"),
					a = n.width(),
					s = n.height();
				$(".btn-qr").bind("mouseenter", function() {
					$(".dialog").hide(), t.show(), n.show(), $("#fade").length < 1 && $("body").append('<div id="fade"></div>'), $("#fade").css({
						filter: "alpha(opacity=80)"
					}).fadeIn(), t.addClass("animated")
				}), n.bind("click", e), $("#qrcode,").bind("click", e), t.find("span").bind("mouseenter", function() {
					n.hide()
				}).bind("mouseleave", function() {
					n.show()
				}), $(document).bind("mousemove", function(e) {
					var t = e.pageX || e.clientX,
						n = e.pageY || e.clientY;
					$("#close-btn").css({
						left: -a / 2 + t,
						top: -s / 2 + n
					})
				})
			},
			parallaxPic: function() {
				var e = document.all && !window.atob;
				if (!e) {
					var t = document.getElementById("scene0"),
						n = document.getElementById("scene1")
						// a = document.getElementById("scene2"),
						// s = document.getElementById("scene3");
						// e = document.getElementById("scene4");
					new Parallax(t), new Parallax(n)
					// , new Parallax(a), new Parallax(s), new Parallax(e)
				}
			},
			flash: function() {
				var e = $(".part1 .flash");
				nie.use(["util.swfobject"], function() {
					$.flash.available && e.flash({
						swf: e.attr("data-src"),
						width: 1920,
						height: 930,
						allowScriptAccess: "always",
						wmode: "transparent"
					})
				})
			},
			popWindow: function(e) {
				$(".dialog").fadeOut().removeClass("curr");
				var t = $("#" + e),
					n = (t.width(), t.height(), t.height() / 2),
					a = t.width() / 2;
				t.css({
					"margin-top": -n,
					"margin-left": -a
				}).fadeIn(), $("#fade").length < 1 && $("body").append('<div id="fade"></div>'), $("#fade").css({
					filter: "alpha(opacity=80)"
				}).fadeIn()
			},
			popClose: function(e) {
				$("#fade ,.dialog ,#" + e).fadeOut(), $("#videoBox").html("")
			},
			setVideo: function(e) {
				nie.use(["nie.util.video", "util.swfobject"], function() {
					nie.util.video($("#videoBox"), {
						movieUrl: e.f4v,
						mp4_movieUrl: e.mp4,
						width: 960,
						height: 540,
						bufferTime: 5,
						loopTimes: 0,
						wmode: "opaque",
						volume: .3,
						startImg: e.img,
						autoPlay: !0
					})
				})
			},
			getVideo: function(t) {
				var n = $(t);
				n.bind("click", function() {
					var t = $(this);
					e.setVideo({
						f4v: t.data("flv"),
						mp4: t.data("mp4"),
						img: t.data("img")
					}), e.popWindow("dialog-video")
				})
			},
			gfEwm: function() {
				var e = $(".nav .gwlt"),
					t = $(".top-bar .nav a span");
				e.hover(function() {
					t.show()
				}, function() {
					t.hide()
				})
			}
		},
			t = function() {
				e.setSwiper(), e.respond(), e.attention(), e.newTab(), e.slidePic(), e.btnQr(),e.gfEwm(),e.parallaxPic(),e.getVideo(".btn-video")
			};
		return {
			fn: e,
			init: t
		}
	}();
$(function() {
	PAGE.init()
});

	$(function(){

		var layH=$("body").height();
		$(".lay").css("height",layH);

        $(".vedio-box").click(function(){
            $(".lay,.g-videoPop").fadeIn();
        }); 		

        $(".gift").click(function(){
			$(".lay,.tk").fadeIn();
		});		

		$(".closeVideo,.x").click(function(){
			$(".lay,.g-videoPop,.tk").fadeOut();
		});
	})