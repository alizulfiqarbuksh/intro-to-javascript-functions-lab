function isAdult (age) {

  if (age >= 18) {
    return "Adult";
  }
  else
  {
    return "Minor";
  }

}

console.log('Exercise 2 Result:', isAdult(21));

// ----------------------------------------------------------------

  function isCharAVowel (char) {

    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

      return true;
    }
    else {
      return false;
    }

  };

  console.log('Exercise 3 Result:', isCharAVowel("a"));

// ----------------------------------------------------------------

function generateEmail (name, domain) {

  return name + "@" + domain;

};

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// ----------------------------------------------------------------

function greetUser (name, time) {

  return "Good " + time + ", " + name;

};

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// ----------------------------------------------------------------

function maxOfThree (num1, num2, num3) {

  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  else if (num2 > num1 && num2 > num3) {
    return num2;
  }
  else
  {
    return num3;
  }

};

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

// ----------------------------------------------------------------

function calculateTip (amount, tip) {

  return amount * (tip / 100);

};

console.log('Exercise 7 Result:', calculateTip(50, 20));

// ----------------------------------------------------------------

const convertTemperature = (temp, type) => {

  if (type === "C") {
    return temp * 1.8 + 32
  }
  else
  {
    return (temp - 32) / 1.8
  }

};

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

// ----------------------------------------------------------------

function basicCalculator (num1, num2, operation) {

  if (operation === "add") {
    return num1 + num2;
  }
  else if (operation === "subtract") {
    return num1 - num2;
  }
  else if (operation === "multiply") {
    return num1 * num2;
  }
  else if (operation === "divide") {
    return num1 / num2;
  }

}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));