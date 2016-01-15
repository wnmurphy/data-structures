//graph class in pseudoclassical style
  //  "Undirected graph, does not have to be connected"
    // The relationship of any 2 nodes connected by an edge is symmetrical (each references the other)
    // 
  // All methods will need to use 'this'

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
  this.edges = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return this.nodes[node] ? true : false;
  // iterate recursively through Graph's array of edges
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
  // also remove other nodes' references to node
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  // graph.edges["penguins"] === ["penguins", "puppies"];
  var condition = false;
  for(var key in this.edges){
      // fromNode is this.edges[key][0] or this.edges[key][1], and
      // toNode is this.edges[key][0] or this.edges[key][1].
    condition = (this.edges[key][0] === fromNode && this.edges[key][1] === toNode) ||
                (this.edges[key][0] === toNode && this.edges[key][1] === fromNode);
  }
  return condition;

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode] = [fromNode, toNode];
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
    if (this.hasEdge(fromNode, toNode)){
      delete this.edges[fromNode];   
    }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */