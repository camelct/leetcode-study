/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

var target = 6;
var guess = function(num) {
  if (num === target) {
    return 0; // 恭喜！你猜对了！
  } else if (num < target) {
    return -1; // 我的数字比较小
  } else if (num > target) {
    return 1; // 我的数字比较大
  }
};

var guessNumber = function(n) {
  var left = 0,
    right = n;
  while (left <= right) {
    var mid = Math.floor(left + (right - left) / 2);
    var res = guess(mid);
    if (res > 0) {
      right = mid - 1;
    } else if (res < 0) {
      left = mid + 1;
    } else if (res === 0) {
      return mid;
    }
  }
  return -1;
};

const res = guessNumber(10);
console.log("res", res);

function mySqrt(x) {
  if (x < 2) return x;

  let left = 0,
    right = x / 2 + 1;
  while (left < right) {
    mid = left + (right - left) / 2;
    if (x / mid == mid || (x / mid > mid && x / (mid + 1) < (mid + 1))) { //刚好
      return mid;
    } else if (x / mid > mid) { // mid比根小
      left = mid;
    } else {
      right = mid;
    }
  }

  return -1;
}
console.log('mySqrt(8)', mySqrt(8));
console.log('mySqrt(0)', mySqrt(0));
console.log('mySqrt(4)', mySqrt(4));
console.log('mySqrt(9)', mySqrt(9));
console.log('mySqrt(2)', mySqrt(2));
console.log('mySqrt(1)', mySqrt(1));