function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
};

let prettyPrint = (curr) => {
  if(curr.left !== null) {
    prettyPrint(curr.left);
  }
  console.log(curr.data + " , ");
  if(curr.right !== null) {
    prettyPrint(curr.right);
  }
};

const append = (curr, data) => {
  if(data <= curr.data) {
    if(curr.left === null) {
      curr.left = new Node(data, null, null);
    } else {
      append(curr.left, data);
    }
  } else {
    if(curr.right === null) {
      curr.right = new Node(data, null, null);
    } else {
      append(curr.right, data);
    }
  }
}

function BinaryTree() {
  this.root = new Node(null, null, null);
};

BinaryTree.prototype.prettyPrint = function(data) {

};

BinaryTree.prototype.append = function(data) {

};

BinaryTree.prototype.remove = function() {

};
