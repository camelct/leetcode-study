/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = [...nums];

  for (let i = 1; i < nums.length; ++i) {
    // dp[i] = Math.max(0, dp[i - 1]) + nums[i]
    dp[i] = Math.max(nums[i] + 0, nums[i] + dp[i - 1])
  }

  return Math.max(...dp)
};

console.log('maxSubArray', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4, 10]));

/**
 * 1、暴力 n^2
 * 2、DP
 *  a.分治（子问题）    max_sub(i) = Max(max_sub(i-1), 0) + a[i]
 *  b.状态数组定义      f[i]
 *  c.DP方程           f[i]=Max(f[i-1], 0) + a[i]
 */