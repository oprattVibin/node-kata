function serialize(node, arr) {
  if (node) {
    arr.push(node.data);
    arr = serialize(node.left, arr);
    arr = serialize(node.right, arr);
  } else {
    arr.push("NULL");
  }

  return arr;
}

function deserialize(arr) {
  var node = {};

  if (arr.length) {
    var data = arr.shift();
    if (data == "NULL") {
      return null;
    }
    node.data = data;
    node.left = deserialize(arr);
    node.right = deserialize(arr);
  }

  return node;
}

var node = {
  "data": 1,
  "left": {
    "data": 2,
    "left": {
      "data": 3,
      "left": null,
      "right": null
    },
    "right": {
      "data": 4,
      "left": {
        "data": 5,
        "left": null,
        "right": null
      },
      "right": null
    }
  },
  "right": {
    "data": 6,
    "left": {
      "data": 7,
      "left": null,
      "right": {
        "data": 8,
        "left": null,
        "right": null
      }
    },
    "right": {
      "data": 9,
      "left": {
        "data": 10,
        "left": null,
        "right": {
          "data": 11,
          "left": null,
          "right": null
        }
      },
      "right": {
        "data": 12,
        "left": {
          "data": 13,
          "left": null,
          "right": null
        },
        "right": null
      }
    }
  }
};

var arr = serialize(node, []);
console.log(arr);

var dNode = deserialize(arr);
console.log(JSON.stringify(dNode, null, 2));
