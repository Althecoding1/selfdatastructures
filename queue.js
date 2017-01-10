function Stack() {
  this.elements = [];
};

Stack.prototype.add = function(value) {
  this.elements.push(value);
};

Stack.prototype.remove = function() {
  this.elements.pop();
};

Stack.prototype.checkSize = function() {
  return this.elements.length;
};

Stack.prototype.hasElement = function(element) {
  for(var i = 0; i < this.elements.length; i++) {
    this.elements[i] === element ? true : false;
  }
};

Stack.prototype.reset = function() {
  this.elements = [];
};

Stack.prototype.topBook = function() {
  return this.elements[this.elements.length - 1];
};
