/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * ! 递归法
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var result = [];
  level(1, root, result);
  return result;
};

var level = (index, root, result) => {
  if (root === null) return result;
  if (result.length < index) result.push([]);

  result[index - 1].push(root.val);
  if (root.left) level(index + 1, root.left, result);
  if (root.right) level(index + 1, root.right, result);
};

/**
 * ! 迭代法
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];

  var queue = [],
    res = [];
  queue.push(root);
  while (queue.length) {
    var cLen = queue.length;
    var temp = [];

    while (cLen) {
      var t = queue.shift();
      temp.push(t.val);
      if (t.left !== null) queue.push(t.left);
      if (t.right !== null) queue.push(t.right);
      cLen--;
    }

    res.push(temp);
  }

  return res;
};

var levelOrder = function(root) {
  if (root === null) return [];

  var queue = [],
    res = [];
  queue.push(root);
  while (queue.length) {
    var cLen = queue.length;
    var temp = [];

    while (cLen) {
      var t = queue.shift();
      temp.push(t.val);
      if (t.left !== null) queue.push(t.left);
      if (t.right !== null) queue.push(t.right);
      cLen--;
    }

    res.push(Math.max(temp));
  }

  return res;
};

console.log('Math.max([1, 2, 3])', Math.max(...[1, 2, 3]));