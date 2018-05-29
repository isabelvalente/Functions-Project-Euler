 // PROBLEM 1

 var sum = 0;


 for (var i = 0; i < 1000; i++) {
   if (i % 3 == 0 || i % 5 == 0){
     sum = sum + i;
     console.log(i);
   }
 }
 console.log(sum);


// PROBLEM 2

// function fibonacci(num){
//   var a = 1, b = 0, temp;
//
//   while(num >= 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }
//   return b;
// }

// function fibonacci(num) {
//   var sequence = [1, 1];
//
//   for (var i = 2; i < num; i++) {
//     sequence[i] = sequence[i-1] + sequence[i-2];
//   }
//   return sequence[number-1];
// }

// function fibonnaci(num) {
//   return num < 1 ? 0
//     :num <=2 ? 1
//     :fibonacci(num - 1) + fibonacci(num - 2);
// }
//
// console.log(fibonacci(4));

var fibonacci = function (n)
{
  if (n===1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};



console.log(fibonacci (35));

// Trying to find the sum pf the even values

// for (var i = 0; i < a.length; i++) {
//     if(i % 2 === 0) { // index is even
//         fibonacci.push(a[i]);
//     }
// }
//
//  //
//  // for (var i = 0; i < 4000000; i++) {
//  //   if (fibonnaci) {
//  //
//  //
//  //   }
//  // }

 // REMAINING ANSWER FOR FUNCTIONS LAB

 // 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules



// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz(value){

  switch (true) {
    case value % 3 == 0 && value % 5 == 0:
    return value = "FizzBuzz";
    break;
    case value % 5 == 0 && value % 3 != 0:
    return value = "Buzz";
    break;
    case value % 3 == 0 && value % 5 != 0:
    return value = "Fizz";
    break;

    default:
    return value;
  }
}
