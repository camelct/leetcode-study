console.time('runner fiber');
const memo = [];
const fiber = (n) => {
  if (n <= 1) return n;
  if (memo[n] === undefined) memo[n] = fiber(n - 1) + fiber(n - 2);
  return memo[n];
}
console.log('fiber', fiber(150));
console.timeEnd('runner fiber');

console.time('runner fiber2');
const fiber2 = n => {
  let a = [0, 1];
  for (let i = 2; i <= n; ++i) {
    a[i] = a[i - 2] + a[i - 1];
  }
  return a[n];
}
console.log('fiber2', fiber2(150));
console.timeEnd('runner fiber2');


const countPaths = (grid, row, col) => {
  if (!valiSquare(grid, row, col)) return 0;
  if (isAtEnd(grid, row, col)) return 1;
  return countPaths(grid, row + 1, col) + countPaths(grid, row, col + 1);
}


/**
 * 动态规划的关键点：
 *  1、最优子序列 opt[n]=best_of(opt[n-1],opt[n-2],opt[n-3]...)
 *  2、存储中间状态 opt[i]
 *  3、递推公式（美其名曰：状态转移方程 或者 DP方程）
 *    Fib: opt[i] = opt[n-1] + opt[n-2]
 *    二维路径： opt[i,j] = opt[i+1][j] + opt[i][j+1] (且判断 a[i,j]是否为空)
 */