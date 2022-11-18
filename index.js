// var numberOfButtons = document.querySelectorAll(".btn").length;

document.querySelector(".btn").addEventListener("click", function(){
  var height = prompt("Weight(in nums)");
  var weight =prompt("Height(in fit tall(1,2,3,4,5,6,7,8,9,10))");
  alert("Your BMI is " + bmiCalculator(height, weight));
})


function bmiCalculator(weight, height){
var bmi = weight/Math.pow(height, 2);
return bmi;
}

document.querySelector(".btn2").addEventListener("click", function(){
  var dogAge = prompt("Your dog's age(in nums)");
  alert("Your dog's human age is " + ageCalculator(dogAge) + " years old");
})

function ageCalculator(dogAge){
  var humanAge = ((dogAge-2)*4) + 21;
  return humanAge;
}


document.querySelector(".btn3").addEventListener("click", function(){
  var yourName = prompt("What is your name?");
  var crushName = prompt("What is your crush's name");
  // alert("Your love score is " + loveCalculator() + "%")

  if (loveCalculator() > 70){
    alert("Hello your love score is " + loveCalculator() + "%. You guys are the best couple on earth.");
  } else if (loveCalculator() > 30 && loveCalculator() < 70){
    alert("Hello, your love score is " + loveCalculator() + "%. There's hope for you couple.");
  } else{
    alert("Hello, your love score is " + loveCalculator() + "%. PLEASE BREAK UP ASAP. E NO GO WORK");
  }


});

function loveCalculator(){
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore);
  return loveScore;
}
