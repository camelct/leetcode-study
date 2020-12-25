function Node(val) {
  this.val = val;
  this.next = null;
}

// [1, 2, 3, 4, 5]
const createLinkList = arr => {
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; ++i) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
};

const printLinkList = head => {
  let current = head;
  const res = [];
  while (current) {
    res.push(current.val);
    current = current.next;
  }
  res.push("null");
  console.log(res.join(" -> "));
};

// const testHead = createLinkList([1, 2, 3, 4]);
// printLinkList(testHead);

exports.default = {
  createLinkList,
  printLinkList,
};
