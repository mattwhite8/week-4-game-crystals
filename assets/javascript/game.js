

$( document ).ready(function() {

  var score = 0;
  var wins = 0;
  var losses = 0;
  const chime = $("#chime");


  function randomNumberToGet() {
    return Math.floor(Math.random() * (120 - 19) + 19);
  }

  function randomCrystalNumber() {
    return Math.floor(Math.random() * (12 - 1) + 1);
  }

  function setRandom() {
    $(".gem").map(function(){
      $(this).data("number", randomCrystalNumber());
      console.log($(this).data());
    })
  }


  var target = randomNumberToGet();
  
  $("#target").html(target);
  
  setRandom();
  
  $(".gem").click(function(){
    chime.get(0).play();
    score += $(this).data("number");
    $("#your-score").html(score);
    console.log(score);
    
    if (score === target) {
      wins++;
      $("#wins").html("Wins: " + wins);
      score = 0;
      target = randomNumberToGet();
      $("#your-score").html(score);
      $("#target").html(target);
      setRandom();
    } else if (score > target){
      losses++;
      $("#losses").html("Losses: " + losses);
      score = 0;
      target = randomNumberToGet();
      $("#your-score").html(score);
      $("#target").html(target);
      setRandom();
    }
  })
  
})