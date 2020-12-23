""" 
https://leetcode-cn.com/problems/plus-one/

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。


示例 1：
    输入：digits = [1,2,3]
    输出：[1,2,4]
    解释：输入数组表示数字 123。

示例 2：
    输入：digits = [4,3,2,1]
    输出：[4,3,2,2]
    解释：输入数组表示数字 4321。

示例 3：
    输入：digits = [0]
    输出：[1]
 

提示：
    1 <= digits.length <= 100
    0 <= digits[i] <= 9
"""


class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        i = len(digits) - 1
        while i >= 0:
            if digits[i] == 9:
                digits[i] = 0
                i -= 1
            else:
                digits[i] += 1
                return digits

        # res = [1]
        # for i in digits:
        #     res.append(i)
        # return res

        # digits.insert(0, 1)

        return [1] + digits

        # 转为数字进行
        # arr = [i*10**index for index, i in enumerate(digits[::-1])]
        # num = sum(arr) + 1
        # return [int(x) for x in str(num)]


sol = Solution()
print(sol.plusOne([0]))
print(sol.plusOne([9]))
print(sol.plusOne([1, 0, 9]))
print(sol.plusOne([9, 9, 9, 9, 9]))
print(sol.plusOne([1, 1, 9, 9]))
