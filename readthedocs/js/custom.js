$(document).ready(function(){
  $(".current").siblings(".subnav").css("display","inherit");

  $("nav .wy-menu li").click(function(){
    var navID = location.href.substr(location.href.lastIndexOf('/') + 1);
    $(".activeNavItem").removeClass('activeNavItem');
    $("nav a[href^='"+ navID + "']").addClass('activeNavItem');

    $(this).children(".subnav").css("display","inherit");
    $(this).siblings().children(".subnav").css("display","none");
  })

  var navID = location.href.substr(location.href.lastIndexOf('/') + 1);
  $(".activeNavItem").removeClass('activeNavItem');
  $("nav a[href^='"+ navID + "']").addClass('activeNavItem');
})
