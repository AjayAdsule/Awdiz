{
  //Q. Find subtraction of give two numbers by using function.
  var number1 = 9876;
  var number2 = 5678;
  const result = (num1, num2) => {
    return num1 - num2;
  };
  console.log(result(number1, number2));
}
// Find multiplication of give two numbers by using function.
{
  var number3 = 9876;
  var number4 = 5678;
  const multiplication = (num1, num2) => {
    return num1 * num2;
  };
  console.log(multiplication(number3, number4));
}

//Find dividation of give two numbers by using function.
{
  var number5 = 9876;
  var number6 = 5678;
  const dividation = (num1, num2) => {
    return num1 / num2;
  };
  console.log(dividation(number5, number6));
}
//Find three numbers from given array who's addition is equal to target.
{
  var array = [34, 45, 56, 67, 78, 34, 76, 234, 567, 7834, 56, 34];
  var target = 112;
  const additionOfThreeNumber = (arr, tar) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {}
      }
    }
  };
}
