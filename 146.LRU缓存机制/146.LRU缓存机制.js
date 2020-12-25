class Node {
  constructor(key, val, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleList {
  constructor() {
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  addFist(x) {
    x.next = this.head.next;
    x.prev = this.head;
    this.head.next.prev = x;
    this.head.next = x;
    this.size++;
  }

  remove(x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
    this.size--;
  }

  removeLast() {
    if (this.size === 0) return null;
    const last_node = this.tail.prev;
    this.remove(last_node);
    return last_node;
  }

  getSize() {
    return this.size;
  }
}

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = {}; // 存储键值
  this.cache = new DoubleList();
};

/**
 * @param {number} key
 * @return {number}
 * 
 * if (key 不存在) {
      return -1;
    } else {        
      将数据 (key, val) 提到开头；
      return val;
    }
 */
LRUCache.prototype.get = function (key) {
  const node = this.map[key];
  if (!node) return -1;
  this.put(key, node.val);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 * 
 *  Node x = new Node(key, val);
    if (key 已存在) {
      把旧的数据删除；
      将新节点 x 插入到开头；
    } else {
      if (cache 已满) {
        删除链表的最后一个数据腾位置；
        删除 map 中映射到该数据的键；
      } 
      将新节点 x 插入到开头；
      map 中新建 key 对新节点 x 的映射；
    }
 */
LRUCache.prototype.put = function (key, value) {
  const newNode = new Node(key, value);
  const node = this.map[key];
  if (node) {
    this.cache.remove(node);
    this.cache.addFist(newNode);
    this.map[key] = newNode;
  } else {
    if (this.capacity === this.cache.getSize()) {
      const lastNode = this.cache.removeLast();
      delete this.map[lastNode.key];
    }
    this.cache.addFist(newNode);
    this.map[key] = newNode;
  }
};

const obj = new LRUCache(2);
console.log("obj.get(1)", obj.get(1));
obj.put(1, 0);
console.log("obj.get(1)", obj.get(1));
console.log("obj.cache 1", obj.cache);
obj.put(2, 2);
console.log("obj.cache 2", obj.cache);
obj.put(3, 3);
console.log("obj.cache 3", obj.cache);
obj.put(4, 4);
console.log("obj.cache 4", obj.cache);
obj.put(4, 4);
console.log("obj.get(1)", obj.get(1));
