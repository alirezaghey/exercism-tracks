//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.counter = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.counter++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const val = this.tail.val;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.counter--;
    return val;
  }

  shift() {
    if (this.isEmpty()) return null;
    const val = this.head.val;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.counter--;
    return val;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      node.next = this.head;
      if (this.head) this.head.prev = node;
      this.head = node;
    }
    this.counter++;
  }

  delete(val) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) {
        if (curr.prev && curr.next) {
          // It's neither the head nor the tail
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
          this.counter--;
          break;
        } else if (curr.prev) {
          // It's the tail
          this.pop();
          break;
        } else {
          // It's the head
          this.shift();
          break;
        }
      }
      curr = curr.next;
    }
  }

  count() {
    return this.counter;
  }

  isEmpty() {
    return this.count() === 0;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
