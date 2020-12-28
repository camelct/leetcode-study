from utils.createLinkList import create_link_list, print_link_list

""" 
https://leetcode-cn.com/problems/swap-nodes-in-pairs/

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。


示例 1:
    输入：head = [1,2,3,4]
    输出：[2,1,4,3]

示例 2：
    输入：head = []
    输出：[]

示例 3：
    输入：head = [1]
    输出：[1]

提示：
    链表中节点的数目在范围 [0, 100] 内
    0 <= Node.val <= 100
"""
# Definition for singly-linked list.


class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        pre = ListNode()
        pre.next = head
        res = pre
        while pre.next != None and pre.next.next != None:
            a = pre.next
            b = a.next
            pre.next = b
            a.next = b.next
            b.next = a
            
            pre = a
            
        return res.next
        


sol = Solution()
head = create_link_list([1, 2, 3, 4, 5])
print_link_list(sol.swapPairs(head))
