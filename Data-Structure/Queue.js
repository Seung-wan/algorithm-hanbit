// class Queue {
//   constructor() {
//     this.queue = [];
//   }
//   enqueue(item) {
//     const length = this.queue.push(item);
//     return length;
//   }

//   dequeue() {
//     const item = this.queue.shift();
//     return item;
//   }

//   entries() {
//     console.log(this.queue);
//   }
// }
let Queue = (function Queue() {
  function Queue() {
    this.queue = [];
  }
  Queue.prototype.enqueue = function (item) {
    this.queue.push(item);
  };
  Queue.prototype.dequeue = function () {
    this.queue.shift();
  };
  Queue.prototype.entries = function () {
    console.log(this.queue);
  };

  return Queue;
})();

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.entries();
queue.dequeue();
queue.entries();
