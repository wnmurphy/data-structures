var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i] === undefined) {
    this._storage[i] = [];
  }
  this._storage[i].push([k,v]);
};

HashTable.prototype.retrieve = function (k) {
  var result, i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage[i].length; j++) {
    if (this._storage[i][j][0] === k) {
      result = this._storage[i][j][1];
    }
  }
  if (result === undefined) {
    return null;
  } else {
    return result;
  }
};

HashTable.prototype.remove = function (k) {
  var result, i = getIndexBelowMaxForKey(k, this._limit);

  for(var j = 0; j < this._storage[i].length; j++){
    if(this._storage[i][j][0] === k){
      var spliced = this._storage[i].splice(j, 1);
    }
  }
};
