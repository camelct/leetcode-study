/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const m = triangle.length;
  const dp = Array.from({ length: m }, (_, index) => triangle[index]);
  for (let i = dp.length - 2; i >= 0; --i) {
    for (let j = 0; j <= i; ++j) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }
  return dp[0][0];
};

// var minimumTotal = function(triangle) {
//   for (let i = triangle.length - 2; i >= 0; --i) {
//     for (let j = 0; j < triangle[i].length; ++j) {
//       triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
//     }
//   }
//   console.log('triangle 2', triangle);
//   return triangle[0][0];
// };

console.log('minimumTotal', minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]));

const minimumTotal = (trArr) => {
  const m = trArr.length;
  const dp = Array.from({ length: m }, (_, index) => trArr[index]);
  console.log('dp', dp);

  for (let i = m - 2; i >= 0; --i) {
    for (let j = 0; j < trArr[i].length; ++j) {
      dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1])
    }
  }

  console.log('dp', dp);
  return dp[0][0];
}

console.log('minimumTotal', minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]));