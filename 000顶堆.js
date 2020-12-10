/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.heap = new HeapMin(nums, k);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  return this.heap.add(val);
};

var HeapMin = function(arr, size) {
  this.size = size;
  this.heapList = arr.slice(0, size);
  this.heapifyAll();
  const restList = arr.slice(size);
  for (let i = 0; i < restList.length; i++) {
    this.add(restList[i]);
  }
};

HeapMin.prototype.heapify = function(index) {
  const arr = this.heapList;
  let least = index;
  let subLeft = 2 * index + 1;
  let subRight = subLeft + 1;
  if (subLeft < this.size && arr[subLeft] < arr[least]) least = subLeft;
  if (subRight < this.size && arr[subRight] < arr[least]) least = subRight;
  if (least !== index) {
    [arr[least], arr[index]] = [arr[index], arr[least]];
    this.heapify(least);
  }
};

HeapMin.prototype.heapifyAll = function() {
  for (let i = ~~(this.size / 2) - 1; i >= 0; i--) this.heapify(i);
};

HeapMin.prototype.add = function(n) {
  if (this.heapList.length < this.size) {
    console.log("this.heapList", this.heapList);
    this.heapList.unshift(n);
    console.log("this.heapList", this.heapList);
    this.heapify(0);
  } else if (n > this.heapList[0]) {
    this.heapList[0] = n;
    this.heapify(0);
  }

  return this.heapList[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

var k = 5,
  nums = [1, 2, 3, 4, 5];
var obj = new KthLargest(k, nums);
var param_1 = obj.add(6);
var param_1 = obj.add(2);
console.log("obj", obj);