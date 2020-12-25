const linkfunc = require("../utils/createLinkList");
const { createLinkList, printLinkList } = linkfunc.default;

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
  let cur = null,
    pre = head;
  while (pre) {
    // 保存临时变量,以防下一个找不到
    const temp = pre.next;
    // 直接改变指向
    pre.next = cur;

    // 开始下一次循环
    cur = pre;
    pre = temp;
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

const testhead = createLinkList([1, 2, 3, 4, 5]);
printLinkList(testhead);
printLinkList(reverseList2(testhead));
