$(function(){function a(a,i){$.ajax({url:e+a,type:"GET",dataType:"jsonp",success:function(a){var t=a;if(null!=t&&t.length>0){for(var l="",e=0;e<t.length;e++)l+='<li><a href="'+s+t[e].id+'.shtml">'+t[e].title+"</a></li>";$(i).html(l)}},error:function(){}})}function i(a,i){var t=$(this);$.ajax({url:e+"cms/dataInfo/floorDate.shtml?menuCode="+a+"&",type:"GET",dataType:"jsonp",timeout:5e3,success:function(a){var e=a.floorDateInfo.content[1],s="";if(null!=e&&e.length>0){s+='<div class="apuAleft clearfix fl">',s+='<div class="lefTimg fl">',s+='<a href="'+e[0].picLinkHttp+'"><img class="lazy" src="'+l+e[0].picUrl+'" data-original="" alt="" width="210" height="382"></a>',s+="</div>",s+='<div class="image-text clearfix fl">';for(var n=1;n<=4;n++)s+='<dl class="fl">',s+='<dt><a href="'+e[n].picLinkHttp+'"><img class="lazy" src="'+l+e[n].picUrl+'" data-original="" alt="" width="191" height="137"></a></dt>',s+='<dd class="cinnamon"><a href="'+e[n].picLinkHttp+'">'+e[n].prodTitle+"</a></dd>",s+='<dd class="maney">&yen;'+e[n].prodPrice.toFixed(2)+"<span>/"+e[n].prodUnit+"</span></dd>",s+="</dl>";s+="</div>",s+="</div>",s+='<div class="apuAright fl">',s+='<div class="lefTimg fl">',s+='<a href="'+e[5].picLinkHttp+'"><img class="lazy" src="'+l+e[5].picUrl+'" data-original="" alt="" width="210" height="382"></a>',s+="</div>",s+='<div class="image-text clearfix fl">';for(var o=6;o<=9;o++)s+='<dl class="fl">',s+='<dt><a href="'+e[o].picLinkHttp+'"><img class="lazy" src="'+l+e[o].picUrl+'" data-original="" alt="" width="191" height="137"></a></dt>',s+='<dd class="cinnamon"><a href="'+e[o].picLinkHttp+'">'+e[o].prodTitle+"</a></dd>",s+='<dd class="maney">&yen;'+e[o].prodPrice.toFixed(2)+"<span>/"+e[o].prodUnit+"</span></dd>",s+="</dl>";s+="</div>",s+="</div>",$(i).html(s),t.find("img.lazy").lazyLoadIndex()}},error:function(){}})}function t(a,i){var t=$(this);$.ajax({url:e+"cms/dataInfo/floorDate.shtml?menuCode="+a+"&",type:"GET",dataType:"jsonp",timeout:5e3,success:function(a){var e=a.floorDateInfo.content[1],s="";if(null!=e&&e.length>0){var n=e[0].textTitle.split(","),o=e[0].textDesc.split(",");s+='<div class="grouleft-con fl">',s+='<a href="'+e[0].picLinkHttp+'"><img class="lazy" src="'+l+e[0].picUrl+'" data-original="" alt="" width="210" height="261"></a>',s+='<div class="ground-ul ground-ul01">',s+='<ul class="clearfix">';for(var r=0;r<o.length;r++)s+='<li class="fl"><a href="'+$("#h_searchPath").val()+"list-s1-"+n[r]+'-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html" target="_blank">'+o[r]+"</a></li>";s+="</ul>",s+="</div>",s+="</div>",s+='<dlv class="groundLeft clearfix fl">',s+='<div class="fl imgAgesBox">';for(var c=1;c<=6;c++)s+='<a href="'+e[c].picLinkHttp+'"><img class="lazy" src="'+l+e[c].picUrl+'" data-original="" alt="" width="330" height="360"></a>';s+="</div>",s+='<div class="imgAges-content fl">';for(var d=1;d<=6;d++)s+="<p>",s+='<img class="lazy" src="'+l+e[d].vendorLogUrl+'" data-original="" alt="" width="100" height="50">',s+="</p>";s+='<i class="u-icon" style="color:#f06b56">&#xe663;</i>',s+="</div>",s+="</dlv>",s+='<div class="groundRight fl clearfix">',s+='<div class="groundall clearfix fl">';for(var p=7;p<=12;p++)s+='<div class="aquaticAll fl ">',s+='<a href="'+e[p].picLinkHttp+'">',s+="<p>"+e[p].prodTitle+"</p>",s+='<p class="case"><span>&yen;'+e[p].prodPrice.toFixed(2)+"</span>/"+e[p].prodUnit+"</p>",s+='<img class="lazy" src="'+l+e[p].picUrl+'" data-original="" alt="" width="172" height="120">',s+="</a>",s+="</div>";s+="</div>",s+="</div>",$(i).html(s),t.find("img.lazy").lazyLoadIndex();var h=$(".imgAgesBox img"),g=0;for($(".imgAgesBox img").eq(0).css({display:"block"}),f=0;f<h.length;f++)g++,g%6==0&&$(".imgAgesBox img").eq(g).css({display:"block"});$(".imgAges-content p").click(function(){var a=$(this).siblings(".u-icon"),i=$(this).index(),t=$(this).parents(".ground-clob").find(".imgAgesBox > a img");t.hide().eq($(this).index()).show(),a.stop().animate({top:60*i},300)})}},error:function(){}})}$(".tRop_ul li").on("mouseenter",function(){$(this).addClass("active").siblings().removeClass("active"),$(".nInforBox .tRcont_ul").hide().eq($(this).index()).show()}),$(".theme-top li").click(function(){if($(this).hasClass("active"))return!1;var a=$(this).parent().find(".z-pointer"),i=$(this).position().left+$(this).outerWidth()/2,t=$(this).closest(".theme").find(".f-items");a.stop().animate({left:i},250),$(this).addClass("active").siblings().removeClass("active"),t.find("img.lazy").lazyLoadIndex()});var l=$("#imgPath").val(),e=$("#apiPath").val(),s=$("#mainUrl").val(),n=$("#infoPath").val();$.ajax({url:e+"cms/dataInfo/floorDate.shtml?menuCode=22&",type:"GET",dataType:"jsonp",timeout:5e3,success:function(a){var i=a.floorDateInfo.content[1];if(null!=i&&i.length>0){for(var t="",e=0;e<i.length;e++)t+='<li style="background-image:url('+l+i[e].picUrl+');">',t+='<a href="'+i[e].picLinkHttp+'" target="_blank"></a>',t+="</li>";$(".SaleBaner").html(t),HtmlSlidePlayer({autosize:0,fontsize:12,time:4e3})}},error:function(){}}),a("cms/dataInfo/siteNoticeDate.shtml",tRcontGg),$.ajax({url:e+"cms/todayQuotation/queryTodayQuotation.shtml?",type:"GET",dataType:"jsonp",success:function(a){var i=a.todayQuotationList;if(null!=i&&i.length>0){for(var t="",l=0;l<i.length;l++)t+="<li>",t+='<a href="">',t+='<span class="nSpan01">'+i[l].variety+"</span>",t+='<span class="nSpan02">'+i[l].region+"</span>",t+='<span class="nSpan03">'+i[l].price+"</span>",t+='<span class="nSpan04">'+i[l].createDate.slice(5,10)+"</span>",t+="</a>",t+="</li>";$(".pre_godUl").html(t),$("#marqueeT").kxbdSuperMarquee({distance:31,time:2,btnGo:{left:"#goL",right:"#goR"},direction:"up"}),$("body").on("click",".pre_godUl a",function(){var a=$(this).find(".nSpan01").text(),i=$(this).find(".nSpan02").text();$(this).attr("href",n+"todayQuotation/queryTodayQuotation.shtml?variety="+a+"&region="+i+"&pageType=info")})}},error:function(){}}),i(29,FreshSale),$(".theme").remove(),$(".switchover").remove(),t(28,Floor01),t(27,Floor02),t(26,Floor03),t(25,Floor04),t(24,Floor05),t(23,Floor06)});