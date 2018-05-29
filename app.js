console.log('working');
//CLASSWORK
//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
// function convertArrayToAnObject (array) {
//   var obj = {};
//   for (i=0 ; i < array.length ; i += 2) {
//     obj[array[i]] = array[i+1];
//   }
//   return obj;
// }



// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules
// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

// function fizzBuzz(num) {
//   if (((num % 3) === 0) && ((num % 5) === 0)) {
//     return 'FizzBuzz';
//   } else if ((num % 5 === 0)) {
//     return 'Buzz';
//   } else if ((num % 3 === 0)) {
//     return 'Fizz';
//   }
// }

// OR

// function fizzBuzz(num) {
//   switch (true) {
//     case ((num % 3 == 0) && (num % 5 == 0)):
//       return "FizzBuzz";
//       break;
//     case ((num % 3 != 0) && (num % 5 == 0)):
//       return "Buzz";
//       break;
//     case ((num % 3 == 0) && (num % 5 != 0)):
//       return "Fizz";
//       break;
//   }
// }



//PROJECT EULER
//Q1
// sumTo1000 = 0;
// for (i=0 ; i < 1000 ; i++) {
//   if ((i%3 === 0) || (i%5 === 0)) {
//     sumTo1000 = sumTo1000 + i;
//   }
// }
// console.log(sumTo1000);



//Q2
// var Fibonacci = [1,2];
// var sequenceSum = 0;
//
// for (i=0 ; Fibonacci[Fibonacci.length-1] <= 4000000 ; i++) {
//   if (Fibonacci[Fibonacci.length-1] % 2 === 0) {
//     sequenceSum += Fibonacci[Fibonacci.length-1];
//   }
//
//   var addLastTwo =  Fibonacci[(Fibonacci.length)-1] + Fibonacci[(Fibonacci.length)-2];
//
//   Fibonacci.push(addLastTwo);
// }



//Q3
// Couldn't complete this task. The problem I has was that 600851475143 was too big. Rather than evaluating every number up to 600851475143 to find the HPF, I was trying to only evaluate some numbers, ie numbers below 600851475143/2 etc. I ran out of time though.
// Below is the stage I was at when I stopped. I was trying to use a for loop to search from 600851475143/2 downwards until a factor is found. Then I would evaluate if the factor is prime somehow. Then stop if it is or continue if not.



function highestPrimeFactor (num) {
  var factors = [];
  var found = false;

  for (var candidate = (Math.floor(num/2)) ;
  factors.length === 0 ;
  candidate--) {
    if (num%candidate === 0) {
      factors.push(candidate);
    }
  }
  return factors;
}

console.log(highestPrimeFactor(600851475143));



// ----------------------
// I found a way to calculate the highest prime factors online below too, but I didn't understand this way too well.

// var x=1, div=0, primes = [];
//
// while (primes.length != 600851475143) {
//   x++;
//   for(var i=2 ; i<x && !div; i++) if(!(x%i)) div++;
//   if(!div) primes.push(x); else div = 0;
// }
//
// console.log(primes[primes.length-1])
