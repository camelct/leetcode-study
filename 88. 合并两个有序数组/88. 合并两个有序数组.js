/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // let i = m + n - 1, j = n - 1;
  // while (j >= 0) {
  //   nums1[i--] = nums2[j--]
  // }
  // const res = nums1.sort((a, b) => a - b)
  // return res

  let len1 = m - 1,
    len2 = n - 1,
    len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  nums1.splice(0, len2 + 1, ...nums2.splice(0, len2 + 1));

  return nums1;
};

console.log("merge", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log("merge", merge([0], 0, [2, 5, 6], 3));
