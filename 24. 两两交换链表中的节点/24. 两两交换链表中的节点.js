const linkfunc = require("../utils/createLinkList");
const { createLinkList, printLinkList } = linkfunc.default;
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var swapPairs = function (head) {
  // const dummy = new ListNode(0);
  // dummy.next = head;
  // let prev = dummy;

  // while (head && head.next) {
  //   const next = head.next; // 临时保存head.next，因为head.next待会要改变
  //   head.next = next.next;
  //   next.next = head;
  //   prev.next = next;

  //   prev = head;      // 指针更新
  //   head = head.next; // 指针更新
  // }
  // return dummy.next;

  var pre = new ListNode(0);
  pre.next = head;
  var res = pre;
  while (pre.next !== null && pre.next.next !== null) {
    const a = pre.next;
    const b = a.next;
    a.next = b.next;
    b.next = a;
    pre.next = b;
    
    pre = a;
  }
  return res.next;

  // if (!head || !head.next) return head;
  // const newHead = head.next;
  // head.next = swapPairs(newHead.next);
  // newHead.next = head;
  // return newHead;
};

const testhead = createLinkList([1, 2, 3, 4, 5]);
printLinkList(testhead);
printLinkList(swapPairs(testhead));
