function roll1(){
  var num=Math.random();
  return Math.ceil(num*6);
}

function roll2(){
  var num=Math.random();
  return Math.ceil(num*6);
}

var dice1=roll1();
var dice2=roll2();

var value1="images/dice"+dice1+".png";
var value2="images/dice"+dice2+".png";

document.getElementById("img1").setAttribute("src",value1)
document.getElementById("img2").setAttribute("src",value2)

if(dice1>dice2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins ⛳ ";
}
else if(dice1<dice2)
{
  document.querySelector("h1").innerText=" ⛳ Player 2 Wins ";
}
else{
  document.querySelector("h1").innerText="Draw!";
}

