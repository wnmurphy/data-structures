var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    // declare a new Node(value)
    var newNode = Node(value);

    // if list is empty
    if(this.head === null){ 

      // set list's head to current node
      this.head = newNode;

      // store current node at tail
      this.tail = this.head;

    } else {
      this.head.next = newNode;
      this.tail = newNode;
    }
  }; 

  list.removeHead = function(){
    // store value of head to return
    var headValue = this.head.value;

    //reassign head
    this.head = this.head.next;

    return headValue;
  };

  list.contains = function(target){
    // declare a variable to keep track of current node
    var current = this.head;
    var result = false; 
  
    while(current.next !== null){
    if(current.value === target){
        result = true;
      }
      current = current.next;
    }
    if(this.tail.value === target){
      result = true;
    }


    return result;
  };

  return list;
};

function Node (value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */