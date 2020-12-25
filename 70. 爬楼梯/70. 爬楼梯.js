/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /**
   * ! 方法 1：  递归
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
   */

  /**
   * ! 方法2：  迭代
    var arr = [1, 2];
    if (n < 3) return arr[n];
    for (let i = 2; i < n; ++i) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
   */

  /**
  * ! 方法3：  滚轮式 迭代
   var q = 0,
     p = 0,
     r = 1;
   for (let i = 0; i < n; ++i) {
     q = p;
     p = r;
     r = q + p;
   }
   return r;
  */
  var q = 0,
    p = 0,
    r = 1;
  for (let i = 0; i < n; ++i) {
    q = p;
    p = r;
    r = q + p;
  }
  return r;
};

console.log("climbStairs", climbStairs(5));

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function (n) {
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};

console.log("1", climbStairs2(6));
