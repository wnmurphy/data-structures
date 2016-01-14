var Queue = function(){
  this.storage = {};
  this.count = 0;
};


Queue.prototype.enqueue = function(value){
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function(){

    var dequeued = this.storage[1];
    delete this.storage[1]; 

    for(var i = 0; i < this.count; i++){ 
      this.storage[i] = this.storage[i+1];
    }
    
    if(this.count){ 
      this.count--;
    }

    return dequeued;
};

Queue.prototype.size = function(){
  return this.count;
};

var queueInstance = new Queue();
