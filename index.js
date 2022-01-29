var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImages = "dice"+randomnumber1+".png"

var randomDiceSource =randomDiceImages

var image1 = document.querySelectorAll('img')[0]

image1.setAttribute("src", randomDiceSource)

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice"+randomnumber2+".png";

var randomImageSource2 = randomDiceImage2;

document.querySelectorAll('img')[1].setAttribute("src", randomImageSource2);

if (randomDiceSource === randomImageSource2){
  document.querySelector('h1').innerHTML="DRAW!"
}
else if (randomDiceSource > randomImageSource2){
  document.querySelector('h1').innerHTML="🚩 Player 1 Wins"
}
else {
  document.querySelector('h1').innerHTML="Player 2 Wins 🚩"
}
