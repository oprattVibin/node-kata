http://jsfiddle.net/owv4Lcrs/1/

function add(a, b) {
    if (typeof b == 'undefined') {
        return function (x) {
            return a + x;
        }
    }
    return a + b;
}

function _add(a, b) {
    if (arguments.length < 1) {
        return _add;
    }
    
    if (arguments.length == 1) {
        return function (x) {
            return a + x;
        }
    }
    
    return a + b;
}

function add3(a) {
    return function(b) {
        return a + b;
    }
}

function add4() {
    return function(a) {
        return function(b) {
            return a + b;
        }
    }
}

console.log(add(2, 5));
console.log(add(2)(5));
console.log(_add()(2)(5));
console.log(add3(2)(5));
console.log(add4()(2)(5));
