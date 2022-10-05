$(document).ready(function(){
  // $("h1").css("color","red");
  // $("h1").addClass("big-title");
  // $("h1").removeClass("big-title");
  // $("h1").addClass("big-title margin-23");
  // $("a").attr("href","www.yahoo.com");
  // $("button").click(function(){
  //   $("h1").css("color","green");
  // });

  // $("input").keydown(function(event){
  //   $("h1").text(event.key);
  // });
  //
  // $("h1").on("click", function(){
  //   $("h1").css("color","purple");
  // });

  $("button").on("click", function(){
    $("h1").slideToggle();
  });
});
