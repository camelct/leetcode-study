""" 
https://leetcode-cn.com/problems/valid-palindrome/

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

    输入: "A man, a plan, a canal: Panama"
    输出: true

示例 2:

    输入: "race a car"
    输出: false
"""

import re

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        # 高层次
        # 只考虑 字母  和 数字字符，  将非 字母和非数字排除  忽略大小写
        arr = ''.join([c.lower() for c in s if c.isalnum()])
        return arr[::-1] == arr

sol = Solution()
res = sol.isPalindrome("1A man, a plan, a canal: Panama1")
print(res)