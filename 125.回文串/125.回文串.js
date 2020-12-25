/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const s1 = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0,
    right = s1.length - 1;

  while (left < right) {
    if (s1[left] !== s1[right]) return false;

    left++;
    right--;
  }

  return true;
};

console.log("1", isPalindrome("A man, a plan, a canal: Panama"));
// console.log('1', isPalindrome('abb'));
