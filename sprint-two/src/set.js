var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
   if(!this.storage[item]){
     this.storage[item] = item;
   } 
};

setPrototype.contains = function(item){
  for(var key in this.storage){
    if(key === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  for(var key in this.storage){
    if(key === item){
      delete this.storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */