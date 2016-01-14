var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.count = 0;

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