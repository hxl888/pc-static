$(function(){function e(e,i){$.ajax({type:"get",url:d+"cms/dataInfo/floorDate.shtml?menuCode="+e+"&",async:!0,dataType:"jsonp",success:function(e){var d=e.floorDateInfo.content[1];if(null!=d&&d.length>0){var s="";s+='<div class="nm-Bigpic">',s+='<a href="'+t+d[0].prodCode+'.shtml" class="fl"><img src="'+a+d[0].picUrl+'" alt="" width="470" height="310"></a>',s+='<p class="vip_p">',s+='<span><span class="rmb">&yen;</span>'+d[0].prodPrice.toFixed(2)+"/"+d[0].units+"&nbsp;</span>",s+="<i>"+d[0].newPrice.toFixed(2)+"/kg</i>",s+="</p>",s+="</div>";for(var o=1;o<=3;o++)s+='<dl class="bm-intro fl">',s+="<dt>",s+='<a href="'+t+d[o].prodCode+'.shtml"><img src="'+a+"product/200/200/"+d[o].mainImgUrl+'" alt="" width="200" height="200"></a>',s+="</dt>",s+='<dd class="bm-big-cove">',s+='<a href="'+t+d[o].prodCode+'.shtml">',s+='<div class="bm-side-cover">',s+='<div class="bu-at-once">',s+="<p>立即尝鲜</p>",s+="</div>",s+="</div>",s+="</a>",s+="</dd>",s+='<dd class="bu-feet"><a href="'+t+d[o].prodCode+'.shtml">'+d[o].productName+"</a></dd>",s+='<dd class="bu-money"><a href="'+t+d[o].prodCode+'.shtml">&yen;'+d[o].prodPrice.toFixed(2)+"/"+d[o].units+"<span>"+d[o].newPrice.toFixed(2)+"/kg</span></a></dd>",s+="</dl>";s+='<div class="DalyBy">';for(var o=4;o<9;o++)s+='<dl class="bm-intro fl">',s+="<dt>",s+='<a href="'+t+d[o].prodCode+'.shtml"><img src="'+a+"product/200/200/"+d[o].mainImgUrl+'" alt="" width="200" height="200"></a>',s+="</dt>",s+='<dd class="bm-big-cove">',s+='<a href="'+t+d[o].prodCode+'.shtml">',s+='<div class="bm-side-cover">',s+='<div class="bu-at-once">',s+="<p>立即尝鲜</p>",s+="</div>",s+="</div>",s+="</a>",s+="</dd>",s+='<dd class="bu-feet"><a href="'+t+d[o].prodCode+'.shtml">'+d[o].productName+"</a></dd>",s+='<dd class="bu-money"><a href="'+t+d[o].prodCode+'.shtml">&yen;'+d[o].prodPrice.toFixed(2)+"/"+d[o].units+"<span>"+d[o].newPrice.toFixed(2)+"/kg</span></a></dd>",s+="</dl>";s+="</div>",$(i).html(s),$(".bm-side-cover").hide(),$(".bm-intro").hover(function(){$(this).find(".bm-side-cover").show()},function(){$(this).find(".bm-side-cover").hide()})}}})}var a=$("#imgPath").val(),d=$("#apiPath").val(),t=$("#itemPath").val();$.ajax({type:"get",url:d+"cms/dataInfo/floorDate.shtml?menuCode=37&",async:!0,dataType:"jsonp",success:function(e){var d=e.floorDateInfo.content[1],t="";if(null!=d&&d.length>0){for(var i=0;i<d.length;i++)t+='<li style="background-image: url('+a+d[i].picUrl+');">',t+='<a href="'+d[i].picLinkHttp+'" target="_blank"></a>',t+="</li>";$("#Dalidban").html(t),HtmlSlidePlayer({autosize:0,fontsize:12,time:4e3})}},error:function(){}}),e(38,DalyExplo),e(39,DalyNew)});