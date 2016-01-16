var BinarySearchTree = function(value){
  var binarySearchTree = Object.create(BinarySearchTree.prototype);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

var node = BinarySearchTree;

BinarySearchTree.prototype.insert = function(value){

  // if value is greater, go right
  if (value > this.value){
    if(this.right === null){
      this.right = node(value);
    } else {
      this.right.insert(value);
    }  
  // if value is lesser, go left
  } else if (value < this.value){
    if(this.left === null){
      this.left = node(value);
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
  var result = false;
  if(this.value === value){
    result = true;
  } else if ((value > this.value) && (this.right !== null)){
    result = this.right.contains(value);
  // if value is lesser, go left
  } else if ((value < this.value) && (this.left !== null)){
    result = this.left.contains(value);
  }
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  // basically swipe .contains and modify to be like .each()
};


//var binarySearchTree = new BinarySearchTree();
/*
 * Complexity: What is the time complexity of the above functions?
 */
