/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 超时
var threeSum = function (nums) {
  const res = [];

  for (let a = 0, len = nums.length; a < len; a++) {
    for (let b = a + 1; b < len - 2; b++) {
      for (let c = b + 1; c < len - 1; c++) {
        if (nums[a] + nums[b] + nums[c] === 0) {
          res.push([nums[a], nums[b], nums[c]]);
        }
      }
    }
  }

  return res;
};

console.log("threeSum", threeSum([-1, 0, 1, 2, -1, -4]));
