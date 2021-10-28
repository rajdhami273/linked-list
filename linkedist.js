class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function createLinkedlist() {
  const node = new Node(2, null);
  return node;
}

console.log(createLinkedlist());