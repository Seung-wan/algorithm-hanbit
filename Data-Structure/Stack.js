class Stack {
  constructor() {
    this.array = [];
  }
  push(item) {
    const length = this.array.push(item);
    return length;
  }

  pop() {
    const item = this.array.pop();
    return item;
  }
  entries() {
    console.log(this.array);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.entries();
stack.pop();
stack.entries();
