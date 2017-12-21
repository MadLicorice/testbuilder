// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.  
/*
var detectNetwork = function(cardNumber) {
  let cardType;
  let len = cardNumber.length;
  let firstTwo = parseInt(cardNumber.slice(0, 2));

  if ((len === 14) && (firstTwo === 38 || firstTwo === 39)) {
  	cardType = 'Diner\'s Club'
  } else if ((len === 15) && (firstTwo === 34 || firstTwo === 37)) {
    cardType = 'American Express'
  }
  return cardType;
};
*/

var detectNetwork = function(cardNumber) {
  let len = cardNumber.length;

  let firstOne = parseInt(cardNumber.slice(0, 1));
  let firstTwo = parseInt(cardNumber.slice(0, 2));
  let firstThree = parseInt(cardNumber.slice(0, 3));
  let firstFour = parseInt(cardNumber.slice(0, 4));
  let firstSix = parseInt(cardNumber.slice(0, 6));

  if ((len === 16 || len === 18 || len === 19) && (firstSix === 564182 || firstSix === 633110 || firstFour === 4903 || firstFour === 4905 || firstFour === 4911 || firstFour === 4936 || firstFour === 6333 || firstFour === 6759)) {
    return "Switch";
  } else if	((len === 14) && (firstTwo === 38 || firstTwo === 39)) {
  	return 'Diner\'s Club';
  } else if ((len === 15) && (firstTwo === 34 || (firstTwo === 37))) {
    return 'American Express';
  } else if ((len=== 13 || len === 16 || len === 19) && (firstOne === 4)) {
  	return 'Visa';
  } else if ((len === 16) && (firstTwo >= 51 && firstTwo <= 55)) {
  	return 'MasterCard';
  } else if ((len === 16 || len === 19) && (firstFour === 6011 || (firstThree >= 644 && firstThree <= 649) || firstTwo === 65)) {
  	return 'Discover';
  } else if ((len >= 12 && len <= 19) && (firstFour === 5018 || firstFour === 5020 || firstFour === 5038 || firstFour === 6304)) {
  	return 'Maestro';
  } else if ((len >= 16 && len <= 19) && ((firstSix >= 622126 && firstSix <= 622925) || (firstThree >= 624 && firstThree <= 626) || (firstFour >= 6282 && firstFour <= 6288))) {
  	return 'China UnionPay';
  }
};

/*
console.log(detectNetwork('38345678901234'));  //Diner
console.log(detectNetwork('39345678901234'));
console.log(detectNetwork('343456789012345'));  //Amex
console.log(detectNetwork('373456789012345'));
console.log(detectNetwork('4123456789012'));   //Visa
console.log(detectNetwork('4123456789012345'));
console.log(detectNetwork('4123456789012345678'));
console.log(detectNetwork('5112345678901234'));  //Mastercard
console.log(detectNetwork('5212345678901234'));
console.log(detectNetwork('5312345678901234'));
console.log(detectNetwork('5412345678901234'));
console.log(detectNetwork('5512345678901234'));  
console.log(detectNetwork('6011456789012345'));  //Discover
console.log(detectNetwork('6443456789012345678'));
console.log(detectNetwork('630445678901'));  //Maestro
console.log(detectNetwork('503834567890123'));


//China UnionPay
//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
console.log(detectNetwork('6221266789012345678'));
console.log(detectNetwork('622700678901234567'));
console.log(detectNetwork('62290067890123456'));
console.log(detectNetwork('6221266789012345'));
console.log(detectNetwork('6229256789012345678'));
console.log(detectNetwork('622600678901234567'));
console.log(detectNetwork('62230067890123456'));
console.log(detectNetwork('6229256789012345'));


console.log(detectNetwork('6243456789012345678'));
console.log(detectNetwork('625345678901234567'));
console.log(detectNetwork('62534567890123456'));
console.log(detectNetwork('6263456789012345'));

console.log(detectNetwork('6282456789012345678'));
console.log(detectNetwork('628345678901234567'));
console.log(detectNetwork('62844567890123456'));
console.log(detectNetwork('6285456789012345'));
console.log(detectNetwork('6286456789012345678'));
console.log(detectNetwork('628745678901234567'));
console.log(detectNetwork('62884567890123456'));
console.log(detectNetwork('6288456789012345'));
console.log(detectNetwork('6287456789012345678'));
console.log(detectNetwork('628645678901234567'));
console.log(detectNetwork('62854567890123456'));
console.log(detectNetwork('6284456789012345'));
*/