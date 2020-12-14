/**
 * @param {string} s
 * @return {boolean}
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      if (i !== j) nums[i] = 0;
      j++;
    }
  }

  return nums;
};

console.log("1", moveZeroes([0, 1, 0, 3, 12]));
