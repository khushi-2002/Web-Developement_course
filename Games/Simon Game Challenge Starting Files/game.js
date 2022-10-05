var buttonColours =["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level =0;
var started= false;
function nextSequence(){
    $("#level-title").text("Level "+level);
    level=level+1;
    var randomNumber = Math.random();
    randomNumber= Math.floor(randomNumber*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function checkAnswer(currentLevel){

}
$(".btn").on("click",function(){

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  checkAnswer();
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function () {
  $("#"+currentColour).removeClass("pressed");
}, 100);
}

$(document).on("keydown", function(){
  if(started==false){
  nextSequence();
  started=true;
  }
});
