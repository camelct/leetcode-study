/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += 1;
    if (digits[i] % 10 === 0) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  return [1, ...digits];
};

console.log("plusOne", plusOne([0]));
console.log("plusOne", plusOne([9]));
console.log("plusOne", plusOne([1, 0, 1]));
console.log("plusOne", plusOne([9, 9, 9, 9, 9]));
console.log("plusOne", plusOne([1, 1, 9, 9]));
