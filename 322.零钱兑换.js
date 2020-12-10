/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const result = [];
  dfs(coins, amount, result, 1)
  return [];
};

console.log('coinChange', coinChange([1, 2, 5], 11));