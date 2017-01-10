function Queue() {
  this.elements = [];
};

Queue.prototype.joinQueue = function(element) {
  this.elements.push(element);
};

Queue.prototype.leaveQueue = function() {
  this.elements.shift();
};

Queue.prototype.seeQueue = function() {
  this.elements.join(" , ");
};

Queue.prototype.queueLength = function() {
  return this.elements.length;
};

Queue.prototype.first = function() {
  return this.elements[0];
};

Queue.prototype.isEmpty = function() {
  return this.elements.length > 0 ? true : false;
};
