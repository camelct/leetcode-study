/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let result = imin = imax = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < 0) {
      [imax, imin] = [imin, imax]
    }

    imax = Math.max(nums[i], imax * nums[i])
    imin = Math.min(nums[i], imin * nums[i])

    result = Math.max(imax, result)
  }

  return result
};


console.log('maxProduct', maxProduct([2, 3, -2, -1, 4]));