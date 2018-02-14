

function enableIncome() {
  document.getElementById('income').disabled = false;
  document.getElementById('incomeYears').disabled = false;
};

function enableInflation() {
  document.getElementById('inflation').disabled = true;
  document.getElementById('inflation').value = 3;
};

function enableMortgage () {
  document.getElementById('mortgageBalance').disabled = false;
  // document.getElementById('mortgageYears').disabled = false;
  // document.getElementById('interestRate').disabled = false;
};

function enableChild () {
  document.getElementById('child1').disabled = false;
};

function enableChild2 () {
  document.getElementById('child2').disabled = false;
};

function enableChild3 () {
  document.getElementById('child3').disabled = false;
};

function enableChild4 () {
  document.getElementById('child4').disabled = false;
};

function enableChild5 () {
  document.getElementById('child5').disabled = false;
};



function calculate() {
  var mort = document.getElementById('mortgageBalance').value;
  // var int = document.getElementById('interestRate').value;
  // var mortY = document.getElementById('mortgageYears').value;
  var c1 = document.getElementById('child1').value;
  if (c1 > 0 && c1 < 18) {
    c1x = 18 - c1;
  } else {
    c1x = 0;
    }
  var c2 = document.getElementById('child2').value;
  if (c2 > 0 && c2 < 18) {
    c2x = 18 - c2;
  } else {
    c2x = 0;
  }
  var c3 = document.getElementById('child3').value;
  if (c3 > 0 && c3 < 18) {
    c3x = 18 - c3;;
  } else {
    c3x = 0;
  }
  var c4 = document.getElementById('child4').value;
  if (c4 > 0 && c4 < 18) {
    c4x = 18 - c4;;
  } else {
    c4x = 0;
  }
  var c5 = document.getElementById('child5').value;
  if (c5 > 0 && c5 < 18) {
    c5x = 18 - c5;;
  } else {
    c5x = 0;
  }
  var inc = document.getElementById('income').value;
  var incY = document.getElementById('incomeYears').value;
  var infl = document.getElementById('inflation').value;
  var result = document.getElementById('result');
  var cTotal = +c1x * 13000 + +c2x * 13000 + +c3x * 13000 + +c4x * 13000 + +c5x * 13000;
  var incTotal = +inc * +incY;
  var myResult = incTotal;
  myResult.toFixed(2);
  var myResult = +mort + +incTotal + +cTotal;
  result.value = myResult;

};
