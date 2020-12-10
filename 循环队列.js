function MyCircularQueue(k) {
  this.head = null;
  this.tail = null;
  this.queue = new Array(k).fill(null);
}

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
    return false
  } else if (this.isEmpty()) {
    this.head = this.tail = 0;
    this.queue[this.tail] = value;
  } else {
    this.tail = (this.tail + 1) % this.queue.length;
    this.queue[this.tail] = value;
  }
  return true;
}

MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false;
  } else {
    if (this.queue[this.head] === null) {
      return false;
    }

    this.queue[this.head] = null;
    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = (this.head + 1) % this.queue.length;
    }
  }
  return true;
}

MyCircularQueue.prototype.Front = function() {
  if (!this.isEmpty()) {
    return this.queue[this.head];
  }

  return -1;
};

MyCircularQueue.prototype.Rear = function() {
  if (!this.isEmpty()) {
    return this.queue[this.tail]
  }

  return -1;
}

MyCircularQueue.prototype.isEmpty = function() {
  return this.tail === null || this.head === null;
}

MyCircularQueue.prototype.isFull = function() {
  return ((this.tail + 1) % this.queue.length) === this.head
    // let i = 0;
    // while (this.queue.length !== i) {
    //   if (this.queue[i] === null) {
    //     return false;
    //   }
    //   ++i;
    // }
    // return true;
}

// ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","deQueue","deQueue","isEmpty","isEmpty","Rear","Rear","deQueue"]
// [[8],[3],[9],[5],[0],[],[],[],[],[],[],[]]

// ["MyCircularQueue","enQueue","Rear","Rear","deQueue","enQueue","Rear","deQueue","Front","deQueue","deQueue","deQueue"]
// [[6],[6],[],[],[],[5],[],[],[],[],[],[]]
var circularQueue = new MyCircularQueue(6); // 设置长度为 3
console.log(circularQueue.enQueue(6));
console.log(circularQueue.Rear());
console.log(circularQueue.Rear());
console.log(circularQueue.deQueue());
console.log(circularQueue.enQueue(5));
console.log(circularQueue.Rear(5));
console.log(circularQueue.deQueue());
console.log(circularQueue.Front());
console.log(circularQueue.deQueue());
console.log(circularQueue.deQueue());
console.log(circularQueue.deQueue());

[true, 6, 6, true, true, 5, true, -1, false, false, false]