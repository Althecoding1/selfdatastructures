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
