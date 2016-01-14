var Stack = function() {
  var instance = {};
  instance.storage = {};
  instance.count = 0;
  extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function(){
  var popped = this.storage[this.count];
  if(this.count){
    this.count--;
  }
  return popped;
};

stackMethods.size = function(){
  return this.count;
};

var stackInstance = Stack();

function extend(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};