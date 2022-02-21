class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    const length = this.queue.push(item);
    return length;
  }

  dequeue() {
    const item = this.queue.shift();
    return item;
  }

  entries() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.entries();
queue.dequeue();
queue.entries();
