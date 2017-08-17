$(document).ready(function(){
  $("nav .wy-menu li").click(function(){
    $(this).children(".subnav").css("display","inherit");
    $(this).siblings().children(".subnav").css("display","none");
  })
})
