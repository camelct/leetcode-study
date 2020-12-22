""" 
https://leetcode-cn.com/problems/3sum/

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：
    给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为：
    [
        [-1, 0, 1],
        [-1, -1, 2]
    ]
"""

# 超时


class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        ret = {}
        numLength = len(nums)
        for a in range(numLength - 2):
            for b in range(a + 1, numLength - 1):
                for c in range(b + 1, numLength):
                    if (nums[a] + nums[b] + nums[c]) == 0:
                        res.append([nums[a], nums[b], nums[c]])

        return res


sol = Solution()
res = sol.threeSum([-1, 0, 1, 2, -1, -4])
print(res)
