/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  if (!text1 || !text2) return 0;
  const m = text1.length + 1;
  const n = text2.length + 1;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m - 1][n - 1];
};

console.log('longestCommonSubsequence', longestCommonSubsequence('aacdez', 'abcde'));