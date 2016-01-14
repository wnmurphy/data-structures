var Queue = function(){
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;


  // Implement the methods below
  someInstance.enqueue = function(value){
    count++;
    storage[count] = value
  };

  someInstance.dequeue = function(){  
    
    // 'unshift' first in line
    var dequeued = storage[1];
    delete storage[1]; 

    // shift every property

    for(var i = 0; i < count; i++){ // 2b, 3c, 4d, 5e
      storage[i] = storage[i+1];
    }
    
    // check for empty object to prevent negative assignment
    if(count){ 
      count--;
    }

    return dequeued;
  };
  
  someInstance.size = function(){
    return count;
  };

  return someInstance;
};