var BinarySearchTree = function(value){
  var binarySearchTree = Object.create(BinarySearchTree.prototype);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

//var node = new BinarySearchTree();

BinarySearchTree.prototype.insert = function(value){

  // if value is greater, go right
  if (value > this.value){
    if(this.right === null){
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }  
  // if value is lesser, go left
  } else if (value < this.value){
    if(this.left === null){
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }  
  }
};

BinarySearchTree.prototype.contains = function(value){
  // .contains(value)
  // recursively search each node's value
  // compare node's value to target value
  // return boolean
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  // basically swipe .contains and modify to be like .each()
};


//var binarySearchTree = new BinarySearchTree();
/*
 * Complexity: What is the time complexity of the above functions?
 */
