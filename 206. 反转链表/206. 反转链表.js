/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 双指针 缓存一个
  let cur = null, pre = head;
  while (pre) {
    // 保存临时变量,以防下一个找不到
    temp = pre.next
    // 直接改变指向
    pre.next = cur

    // 开始下一次循环
    cur = pre
    pre = temp
  }
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function (head) {
  if (head === null || head.next === null) return head;

  const cur = reverseList2(head.next);
  head.next.next = head;
  head.next = null;
  return cur;
};