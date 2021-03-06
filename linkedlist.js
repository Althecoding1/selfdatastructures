function Node(data, next) {
  this.data = data;
  this.next = next;
};

Node.prototype.getData = function() {
  console.log(this.data);
};

function Linkedlist() {
  this.head = new Node(null, null);
  this.length = 0;
};

Linkedlist.prototype.prettyPrint = function() {
  let curr = this.head;
  let result = '';
  while(curr != null) {
    if(curr.next === null) {
      result += curr.data;
    } else {
      result += curr.data + " , ";
    }
    curr = curr.next;
  }
  console.log(result);
};

Linkedlist.prototype.append = function(data) {
  if(this.head.data === null) {
    this.head = new Node(data, null);
  } else {
    let curr = this.head;
    while(curr.next != null) {
      curr = curr.next;
    }
    const node = new Node(data, null);
    curr.next = node;
  }
  this.length++;
};

Linkedlist.prototype.prepend = function(data) {
  if(this.head.data === null) {
    this.head = new Node(data, null);
  } else {
    let newNode = new Node(data, this.head);
    this.head = newNode;
  }
  this.length++;
};

Linkedlist.prototype.getHead = function() {
  return this.head;
};

Linkedlist.prototype.get = function(value) {
  if(value < this.length) {
    let curr = this.head;
    for(var i = 0; i < value; i++) {
      curr = curr.next;
    }
    return curr;
  } else {
    return "Outside bounds";
  }
};

Linkedlist.prototype.remove = function(data) {
  if(this.head.data === data) {
    var curr = this.head;
    curr = curr.next;
    this.head = curr;
    return true;
  } else {
    var curr = this.head;
    var prev = this.head;
    var counter = 0;
    while(curr.data != data) {
      if(counter < this.length) {
        if(counter > 0) {
          prev = prev.next;
        }
        curr = curr.next;
        counter++;
      } else {
        return false;
      }
    }
    if(counter === this.length - 1) {
      prev.next = null;
      delete curr;
      return true;
    } else {
      curr = curr.next;
      prev.next = curr;
      return true;
    }
  }
};
