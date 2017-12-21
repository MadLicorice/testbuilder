/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num % 2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
let digitGen = function(number) {
  let result = '';
  for (let i = 0; i < number; i += 1) {
    result += '1';
  }
  return result;
};


describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var expect = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 
});



describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  const prefixes = ['6011', '65'];

  prefixes.forEach(function(prefix) {
    for (let i = 16; i <= 19; i += 3) {
      it(`has a prefix of ${prefix} and a length of ${i}`, function() { 
        let ccNum = prefix + digitGen(i - prefix.length)
        expect(detectNetwork(ccNum)).to.equal('Discover');
      });      
    }
  });
  
  for (let i = 16; i <= 19; i += 3) {
    for (let j = 644; j <= 649; j += 1) {
      it(`has a prefix of ${j} and a length of ${i}`, function() { 
        let ccNum = j + digitGen(i - 3)
        expect(detectNetwork(ccNum)).to.equal('Discover');
      });      
    }
  }

});



describe('Maestro', function() {
  var expect = chai.expect;
  const prefixes = ['5018', '5020', '5038', '6304'];

  prefixes.forEach(function(prefix) {
    for (let i = 12; i <= 19; i += 1) {
      it(`has a prefix of ${prefix} and a length of ${i}`, function() { 
        let ccNum = prefix + digitGen(i - 4);
        expect(detectNetwork(ccNum)).to.equal('Maestro');
      });      
    }
  });

});



describe('China UnionPay', function() {
  var expect = chai.expect;
  
  const ccLen = [16, 17, 18, 19];

  for (let i = 0; i < ccLen.length; i++) {
    for (let j = 622126; j <= 622925; j++) {
      it(`has a prefix of ${j} and a length of ${ccLen[i]}`, function () {
        expect(detectNetwork(j + digitGen(ccLen[i] - j.toString().length))).to.equal('China UnionPay');
      });
    }
    for (let j = 624; j <= 626; j++) {
      it(`has a prefix of ${j} and a length of ${ccLen[i]}`, function () {
        expect(detectNetwork(j + digitGen(ccLen[i] - j.toString().length))).to.equal('China UnionPay');
      });
    }
    for (let j = 6282; j <= 6288; j++) {
      it(`has a prefix of ${j} and a length of ${ccLen[i]}`, function () {
        expect(detectNetwork(j + digitGen(ccLen[i] - j.toString().length))).to.equal('China UnionPay');
      });
    }
  }
});



describe('Switch', function() {
  var expect = chai.expect;
  const prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  const ccLen =[16, 18, 19];

  ccLen.forEach(function(len) {
    prefixes.forEach(function(prefix) {
      it(`has a prefix of ${prefix} and a length of ${len}`, function() { 
        let ccNum = prefix + digitGen(len - prefix.length);
        expect(detectNetwork(ccNum)).to.equal('Switch');
      });      
    });
  });

});
