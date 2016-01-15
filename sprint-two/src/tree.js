var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value){
  var child = {
    value: value,
    children : []
  }
  extend(child, treeMethods);
  // if value 
  this.children.push(child);
};


treeMethods.contains = function(target){
  var result = false;
  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].value === target){
      result = true;
    }
    if((this.children[i].children.length) && (result !== true)){
      result = this.children[i].contains(target);
    }
  }
  return result;
};



function extend(to, from){
  for(var key in from){
    to[key] = from[key];
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
