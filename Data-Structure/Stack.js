// class Stack {
//   constructor() {
//     this.array = [];
//   }
//   push(item) {
//     const length = this.array.push(item);
//     return length;
//   }

//   pop() {
//     const item = this.array.pop();
//     return item;
//   }
//   entries() {
//     console.log(this.array);
//   }
// }

const Stack = (function () {
  function Stack() {
    this.stack = [];
  }
  Stack.prototype.push = function (item) {
    this.stack.push(item);
  };
  Stack.prototype.pop = function () {
    this.stack.pop();
  };
  Stack.prototype.entries = function () {
    console.log(this.stack);
  };
  return Stack;
})();

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.entries();
stack.pop();
stack.entries();
