var Queue = function(){
  var instance = {};
  instance.storage = {};
  instance.count = 0;
  extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.count++;
  this.storage[this.count] = value
};

queueMethods.dequeue = function(){

    var dequeued = this.storage[1];
    delete this.storage[1]; 

    for(var i = 1; i <= this.count; i++){
      this.storage[i] = this.storage[i+1];
    }
    
    if(this.count){ 
      this.count--;
    }

    return dequeued;
};

queueMethods.size = function(){
  return this.count;
};

var queueInstance = Queue();

function extend(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};

