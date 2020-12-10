/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid && !obstacleGrid[0].length) return 0;

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = Array.from({ length: m }, () => Array(n).fill(0))

  for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < n && obstacleGrid[0][j] === 0; ++j) {
    dp[0][j] = 1;
  }

  console.log('dp', dp);

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  console.log('dp', dp);
  return dp[m - 1][n - 1]
};

console.log('123', uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]));