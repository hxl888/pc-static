$(function(){var a=$("#imgPath").val(),r=$("#apiPath").val();$("#basePath").val();$(".brandStreet").each(function(t,i){var n=$(i).attr("id").split("-")[1],s=$(this);$.ajax({url:r+"cms/dataInfo/floorDate.shtml",type:"get",dataType:"jsonp",data:{menuCode:n},success:function(r){for(var t=r.floorDateInfo.content[1],i="",e=0;e<t.length;e++)i+='<div class="brand_list">',i+='<div class="brand_pic">',i+='<a href="'+$("#mainUrl").val()+"store/"+t[e].storeId+'.shtml"><img class="img_filter lazy" src="'+a+t[e].picUrl+'" data-original="../images/brand_pic/bp_01.jpg" width="385" height="222" alt=""></a>',i+="</div>",i+='<div class="brand_msg">',i+='<div class="brand_name">',i+='<a href="'+$("#mainUrl").val()+"store/"+t[e].storeId+'.shtml" class="brand_a01" target="_blank">进入企业网站</a>',i+=!a+t[e].vendorLogUrl==""?'<a href="'+$("#mainUrl").val()+"store/"+t[e].storeId+'.shtml" class="brand_a02" target="_blank"><img class="img_filter lazy" src="'+$("#basePath").val()+'/images/lazyPic.png" data-original="'+a+t[e].vendorLogUrl+'" width="150" height="100" alt="众品集团"></a>':'<a href="'+$("#mainUrl").val()+"store/"+t[e].storeId+'.shtml" class="brand_a02" target="_blank"><img class="img_filter lazy" src="'+$("#basePath").val()+'/images/lazyPic.png" data-original="'+$("#basePath").val()+'/images/zplogo.jpg" width="150" height="100" alt="众品集团"></a>',i+="</div>",i+='<div class="brand_adr">',i+='<p><a href="##">'+t[e].vendorName+"</a></p>",i+='<p class="clearfix">',i+="<span>经营范围："+t[e].vendorBusiness+"</span> | <span>所在地区："+t[e].vendorArea+"</span>",i+="</p>",i+="</div>",i+="</div>",i+="</div>";$("#brandStreet-"+n).find(".brand_con").html(i),0==$("#brandStreet-"+n).find(".brand_con").length&&$(this).remove(),s.find("img.lazy").lazyLoadIndex(),$(".brand_list").hover(function(){$(this).find(".brand_a01").show(),$(this).find(".brand_a02").hide()},function(a){$(this).find(".brand_a01").hide(),$(this).find(".brand_a02").show()})},error:function(a){}})})});