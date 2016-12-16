$( document ).ready(function() {

// var crystalGame = {
//   score: 0,
//   wins: 0,
//   losses: 0,
//   randomNumberToGet: function(){
//     return Math.floor(Math.random() * 100 + 1);
//   },
//   randomCrystalNumber: function(){
//     return Math.floor(Math.random() * 10 + 1);
//   },
//   setRandom: function(){
//     $("img").map(function(){
//       $(this).data("number", crystalGame.randomCrystalNumber); 
//       console.log($(this).data());
//     })
//   }
// }

  var score = 0;
  var wins = 0;
  var losses = 0;

  function randomNumberToGet() {
    return Math.floor(Math.random() * (120 - 19) + 19);
  }

  function randomCrystalNumber() {
    return Math.floor(Math.random() * (12 - 1) + 1);
  }

  function setRandom() {
    $("img").map(function(){
      $(this).data("number", randomCrystalNumber());
      console.log($(this).data());
    })
  }


  var target = randomNumberToGet();
  
  $("#target").html(target);
  
  setRandom();
  
  $("img").click(function(){
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