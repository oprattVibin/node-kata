// http://jsfiddle.net/owv4Lcrs/

function add1(a, b) {
    if (typeof b == 'undefined') {
        return function (x) {
            return a + x;
        }
    }
    return a + b;
}

function add2(a, b) {
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

console.log(add(2, 5));
console.log(add(2)(5));
console.log(_add()(2)(5));
