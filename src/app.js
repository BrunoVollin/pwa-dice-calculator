let value = 0;
let itsPositive = true;

function modifySignal(signal) {
  itsPositive = signal;
}

function runsDice(num) {
  const diceResult = Math.floor(Math.random() * num) + 1;
  return diceResult;
}

function setNumbers(dice) {
  let signal = "-";
  if (itsPositive) {
    signal = "+";
  }
  const oldNumbers = document.getElementById("numbers").value;
  const newNumbers = `${oldNumbers} ${signal} ${dice}`;
  document.getElementById("numbers").value = newNumbers;
}

function setResult(value) {
  document.getElementById("result").innerHTML = value;
}

function setDices(num) {
  let signal = "-";
  if (itsPositive) {
    signal = "+";
  }
  const oldDices = document.getElementById("dices").value;
  const newDices = `${oldDices} ${signal} D${num}`;
  document.getElementById("dices").value = newDices;
}

function reset() {
  itsPositive = true; 
  value = 0;
  document.getElementById("result").innerHTML = "0";
  document.getElementById("numbers").value = " ";
  document.getElementById("dices").value = " ";
}

function onClick(num) {
  const dice = runsDice(num);

  if (itsPositive) {
    value += dice;
  } else {
    value -= dice;
  }

  setNumbers(dice);
  setResult(value);
  setDices(num);
}
