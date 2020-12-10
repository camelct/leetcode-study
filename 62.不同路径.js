/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  console.log("dp", dp);

  for (let i = 0; i < m; ++i) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < n; ++j) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log("dp", dp);
  return dp[m - 1][n - 1];
};
console.log("1", uniquePaths(7, 3));

// const uniquePaths2 = (m, n) => {
//   const cur = new Array(n).fill(1);
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       cur[j] += cur[j - 1]
//     }
//   }
//   return cur[n - 1]
// }

// console.log('1', uniquePaths2(7, 3));
console.log('1', uniquePaths(7, 3));