""" 
https://leetcode-cn.com/problems/lru-cache/

运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。
当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 
进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:
    输入
    ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
    输出
    [null, null, null, 1, null, -1, null, -1, 3, 4]

    解释
    LRUCache lRUCache = new LRUCache(2);
    lRUCache.put(1, 1); // 缓存是 {1=1}
    lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
    lRUCache.get(1);    // 返回 1
    lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
    lRUCache.get(2);    // 返回 -1 (未找到)
    lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
    lRUCache.get(1);    // 返回 -1 (未找到)
    lRUCache.get(3);    // 返回 3
    lRUCache.get(4);    // 返回 4

提示：
    1 <= capacity <= 3000
    0 <= key <= 3000
    0 <= value <= 104
    最多调用 3 * 104 次 get 和 put
"""


class Node(object):
    def __init__(self, key, val, prev=None, next=None):
        self.key = key
        self.val = val
        self.prev = prev
        self.next = next


class DoubleList(object):
    def __init__(self):
        self.head = Node(-1, -1)
        self.tail = Node(-1, -1)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.size = 0

    def addFirst(self, x):
        x.next = self.head.next
        x.prev = self.head
        self.head.next.prev = x
        self.head.next = x
        self.size += 1

    def remove(self, x):
        x.prev.next = x.next
        x.next.prev = x.prev
        self.size -= 1

    def removeLast(self):
        if self.size == 0:
            return None
        last_Node = self.tail.prev
        self.remove(last_Node)
        return last_Node

    def getSize(self):
        return self.size


class LRUCache(object):

    def __init__(self, capacity):
        """
        :type capacity: int
        """
        self.capacity = capacity
        self.map = {}
        self.cache = DoubleList()

    def get(self, key):
        """
        :type key: int
        :rtype: int
        """
        if key not in self.map:
            return -1
        val = self.map[key].val
        self.put(key, val)
        return val

    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: None
        """
        new_node = Node(key, value)
        if key in self.map:
            self.cache.remove(self.map[key])
            self.cache.addFirst(new_node)
            self.map[key] = new_node
        else:
            if self.capacity == self.cache.getSize():
                last_node = self.cache.removeLast()
                self.map.pop(last_node.key)
            self.cache.addFirst(new_node)
            self.map[key] = new_node


capacity = ["LRUCache", "put", "put", "get",
            "put", "get", "put", "get", "get", "get"]

obj = LRUCache(2)
obj.put(1, 1)
print(obj.get(1)) # 1
obj.put(2, 2)
print(obj.get(1)) # 1
obj.put(3, 3)
print(obj.get(2)) # -1