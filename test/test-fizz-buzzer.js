// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer.js');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

    let testFunction = function(input) {
        const answer = fizzBuzzer(input.n);
        expect(answer).to.equal(input.expected);
      }

  // test the normal cases
  it('should return "fizzbuzz" when number is divisible by 3 and 5', function() {
    const normalCases = [
      {n: 15, expected: 'fizz-buzz'},
      {n: 75, expected: 'fizz-buzz'},
    ];

    normalCases.forEach(testFunction);
  });

  it('should return "fizz" when number is divisible by 3', function() {
    const normalCases = [
      {n: 3, expected: 'fizz'},
      {n: 333, expected: 'fizz'},
    ];

    normalCases.forEach(testFunction);
  });

  it('should return "buzz" when number is divisible by 5', function() {
    const normalCases = [
      {n: 5, expected: 'buzz'},
      {n: 25, expected: 'buzz'},
    ];

    normalCases.forEach(testFunction);
  });

  it('should return the number itself when number is not divisible by 3 or 5', function() {
    const normalCases = [
      {n: 11, expected: 11},
      {n: 112, expected: 112},
    ];

    normalCases.forEach(testFunction);
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs 
    const badInputs = [
      'a',
      '1',
      true,
      null,
      undefined
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});