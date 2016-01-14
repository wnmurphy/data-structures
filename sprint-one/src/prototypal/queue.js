var Queue = function(){
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.count = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.count++;
  this.storage[this.count] = value;
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
