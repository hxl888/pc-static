$(".nm-Rlist").hover(function(){$(this).addClass("nm-Rhov").siblings().removeClass("nm-Rhov"),$(this).find(".nm-imhov").stop().animate({height:"27px"})},function(){$(this).removeClass("nm-Rhov"),$(this).find(".nm-imhov").stop().animate({height:"0"})}),$(".nm-titcon").length>0&&$(".nm-Hcenter").hover(function(){$(this).find(".nm-Hcncom").stop().animate({height:"127px"}).show()},function(){$(this).find(".nm-Hcncom").stop().animate({height:"0"}).hide()}),$(".nm-frshow.nm-frone").css({display:"block"}),$(".nm-frh3").on("click",function(){$(this).parent().find(".nm-frshow").css({display:"block"}).parent().siblings().find(".nm-frshow").css({display:"none"})}),$(".nm-imhov").hover(function(){$(this).find("p").css({opacity:"1"})},function(){$(this).find("p").css({opacity:""})});