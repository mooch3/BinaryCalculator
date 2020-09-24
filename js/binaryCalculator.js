var result = "";

function key(e) {

  result += e

  document.getElementById("res").innerHTML = result;
}

function clr(){
  result = "";
  document.getElementById("res").innerHTML = result;
}

var functionsArray = ["+", "-", "*", "/"]

var mathTime = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

function operatorFunctions() {
  for (let i = 0; i<= functionsArray.length; i++){
    if (result.indexOf(functionsArray[i]) != -1) {
      var numbers = result.split(functionsArray[i]);
      var num1 = parseInt(numbers[0], 2);
      var num2 = parseInt(numbers[1], 2);
      var math = mathTime[functionsArray[i]](num1, num2);
      var ans = math.toString(2);
    }
  }
  result = ans;
  document.getElementById("res").innerHTML = result;
}
