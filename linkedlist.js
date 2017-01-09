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
  const curr = this.head;
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

};


Linkedlist.prototype.prepend = function(data) {

};

Linkedlist.prototype.getHead = function() {

};

Linkedlist.prototype.get = function() {

};

Linkedlist.prototype.remove = function() {

};
