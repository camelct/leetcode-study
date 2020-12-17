/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [1, 2]
  for (i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n - 1]
};

console.log("1", climbStairs(6));
