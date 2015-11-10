var LRUCache = function (size) {
  if (typeof (size) === 'undefined') {
    this.size = 64; // default size
  } else {
    this.size = size;
  }

  this.map = {};
  this.count = 0;
  this.head = this.tail = null;

  // private functions
  this.push = function (node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    // existing node
    if (node.prev || node.next) {
      // if not in-front of list
      // remove from list first
      if (node.prev) {
        node.prev.next = node.next;

        // if not last node
        if (node.next) {
          node.next.prev = node.prev;
        } else {
          this.tail = node.prev;
        }
      }
    }

    // add to front
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  };

  this.deleteLast = function () {
    if (!this.tail) {
      return;
    }

    // remove from map
    delete this.map[this.tail.key];

    // remove from list
    this.tail = this.tail.prev;
    delete this.tail.next.prev;
    delete this.tail.next;
  };
};

LRUCache.prototype.add = function (key, value) {
  var node;
  if (this.map[key]) {
    node = this.map[key];
    node.value = value;
  } else {
    node = { key: key, value: value };
    this.map[key] = node;
    this.count++;
  }

  this.push(node);

  if (this.count > this.size) {
    this.deleteLast();
    this.count--;
  }
};

LRUCache.prototype.get = function (key) {
  if (!this.map[key]) {
    return this.map[key];
  }

  var node = this.map[key];
  this.push(node);
  return node.value;
};
