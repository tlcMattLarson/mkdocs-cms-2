$(document).ready(function(){
  $(".current").siblings(".subnav").css("display","inherit");

  $("nav .wy-menu li").click(function(){
    $(this).children(".subnav").css("display","inherit");
    $(this).siblings().children(".subnav").css("display","none");
  })
})
