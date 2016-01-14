var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value){
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function(){
  var popped = this.storage[this.count];
  if(this.count){
    this.count--;
  }
  return popped;
};

Stack.prototype.size = function(){
  return this.count;
};

var stackInstance = new Stack();