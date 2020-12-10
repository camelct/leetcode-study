var visited =  new Set();

const dfs = (root, visited) => {
  visited.add(root);
 
  
  for (let i = 0; i < root.length; i ++) {
    if (visited.has(root[i])) continue;
    dfs(root, visited);
  }
}