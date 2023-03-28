window.onload = function () { 
    
    
  let dice1 = document.getElementById("dice-one");
  let dice2 = document.getElementById("dice-two");

  const num1 = Math.floor(Math.random() *6 + 1);
  const num2 = Math.floor(Math.random() *6 + 1);

  dice1.src = `Images/${num1}.png`;
  dice2.src = `Images/${num2}.png`;

  let winnerText ="";
  if(num1>num2){
    winnerText = "Player 1 won! 🎉🎉🎉"
  } else if(num2>num1){
    winnerText= "Player 2 won! 🎉🎉🎉"
  } else {
    winnerText = "It is draw!!!"
  }

  document.getElementById("winner").innerHTML = winnerText;

}