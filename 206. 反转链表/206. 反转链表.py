from utils.createLinkList import create_link_list, print_link_list

""" 
https://leetcode-cn.com/problems/reverse-linked-list/

反转一个单链表。

示例:
    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL

进阶:
    你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

"""

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        # 双指针 缓存一个
        cur, pre = None, head

        while pre:
            # 保存临时变量,以防下一个找不到
            temp = pre.next
            # 直接改变指向
            pre.next = cur

            # 开始下一次循环
            cur = pre
            pre = temp

        return cur

    def reverseList2(self, head):
        # 递归终止条件是当前为空，或者下一个节点为空
        if head == None or head.next == None:
            return head

        # 这里的cur就是最后一个节点
        cur = self.reverseList(head.next)  # return 的一直都是 最后一个内容
        # 这里请配合动画演示理解
        # 如果链表是 1->2->3->4->5，那么此时的cur就是5
        # 而head是4，head的下一个是5，下下一个是空
        # 所以head.next.next 就是5->4
        head.next.next = head
        head.next = None
        return cur


head = create_link_list([1, 2, 3, 4, 5])
print_link_list(head)
