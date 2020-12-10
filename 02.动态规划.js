// dp  dynamic  program
// 动态规划   动态递归
// 动态规划 和 递归 或者 分治 没有根本区别（关键看有无最优子结构）
// 共性：找到 重复子问题
// 差异性： 最优子结构、中途可以淘汰次优解

// Memoization O(n)   记忆缓存   自顶向下
const fib = (n, memo) => {
  if (n <= 1) return n;
  if (memo[n] === undefined) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }
  return memo[n];
};

// 自底向上  递推  (最终形态)
const fib2 = n => {
  const a = [0, 1];
  if (n <= 1) return a[n];
  for (let i = 2; i <= n; ++i) {
    a[i] = a[i - 1] + a[i - 2];
  }

  return a[n];
};


// 原 boolean [][] grid    int row    int col 
const countPaths = (grid, row, col) => {
  if (!validSquire(grid, row, col)) return 0;
  if (isAtEnd(grid, row, col)) return 1;
  return countPaths(grid, row + 1, col) + countPaths(grid, row, col + 1);
}

// ? 我改
// boolean [][] grid    int row    int col
const countPaths = (grid, row, col, memo = []) => {
  if (!validSquire(grid, row, col)) return 0;
  if (isAtEnd(grid, row, col)) return 1;
  if (memo[row][col] === undefined) {
    memo[row][col] = countPaths(grid, row + 1, col, memo) + countPaths(grid, row, col + 1, memo)
  }
  return memo[row][col];
}


/**
 * ! 状态转移方程 （DP方程）
 *  opt[i, j] = opt[i+1, j] + opt[i, j+1]
 * 
 *  完整逻辑：
 *    if a[i, j] = '空地':
 *      opt[i, j] = opt[i+1, j] + opt[i, j+1]
 *    else:
 *      opt[i, j] = 0  
 */

/**
 * 动态规划关键点：
 *  1. 最优子结构 opt[n]=best_of(opt[n-1], opt[n-2], ...)
 *  2. 存储中间状态 opt[i]
 *  3. 递推公式 (美其名曰：状态转移方程 或者 DP方程)
 *    Fib: opt[i]=opt[n-1] + opt[n-2]
 *    二维路径: opt[i, j]=opt[i+1, j] + opt[i, j+1]
 */