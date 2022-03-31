// 1. Define a variable
// - ES5
//   var MAX_SIZE = 25 * 1024 * 1024;
//   var title = 'Hello World';
//   title = 'Hello ES6'

// - ES6
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6'

// 2. String Interpolation
// - ES5
// var user = { name: 'David' };
// var card = { amount: 7, product: "Bar", unitprice: 42 };
// var message = "Hello " + user.name + ",\n" +
//     "want to buy " + card.amount + " " + card.product + " for\n" +
//     "a total of " + (card.amount * card.unitprice) + " bucks?";
// -ES6
var user = { name: 'David' };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello  ${user.name} 
    want to buy  ${card.amount}   ${card.product}  for
    a total of  ${card.amount * card.unitprice}  bucks?`;

// 3. Rest Parameter
// - ES5

// function foo(x, y) {
//     var a = Array.prototype.slice.call(arguments, 2);
//     return (x + y) * a.length;
// };
// console.log(foo(1, 2, 'hello', true, 7) === 9);

//  - ES6
function foo(x, y, ...other) {
    return (x + y) * other.length;
};
foo(1, 2, 'hello', true, 7) === 9;


// 4. Default Parameter Values
//   - ES5
function sum(x, y, z) {
    if (y === undefined) {
        y = 7;
    }
    if (z === undefined) {
        z = 42;
    }
    return x + y + z;
};
//-ES6
function sum(x, y = 7, z = 42) {
    return x + y + z;
};

// 5. Arrow Functions
//   - ES5
// var evens = [1, 2, 3, 4, 5, 6];
// var odds = evens.map(function(v) { return v + 1; });
// var pairs = evens.map(function(v) { return { even: v, odd: v + 1 }; });
// var nums = evens.map(function(v, i) { return v + i; });
// var fives = [];
// nums.forEach(function(v) {
//     if (v % 5 === 0) {
//         fives.push(v);
//     }
// });

// - ES6
var evens = [1, 2, 3, 4, 5, 6];
var odds = evens.map(v => v + 1);
var pairs = evens.map(v => ({ even: v, odd: v + 1 }));
var nums = evens.map((v, i) => v + i);
var fives = [];

var arrnew = nums.forEach((v) => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

// 6. Classes
//   - ES5
// var Shape = function(id, x, y) {
//     this.id = id;
//     this.move(x, y);
// };
// Shape.prototype.move = function(x, y) {
//     this.x = x;
//     this.y = y;
// };

// - ES6

class Shape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
}



// 7. Modules
// - ES5
//  lib/utils.js
// Utils = {};
// Utils.sum = function(x, y) { return x + y };
// Utils.pi = 3.141593;

//  someApp.js
// var math = Utils;
// console.log("2π = " + math.sum(math.pi, math.pi));

//  otherApp.js
// var sum = Utils.sum, pi = Utils.pi;
// console.log('2π = ' + sum(pi, pi));
// - ES6
lib / utils.js;
var sum = function(x, y) { return x + y };
var pi = 3.141593;
export { sum, pi };

// someApp.js
import {
    sum,
    pi
} from "/utils.js";
console.log("2π = " + sum(pi, pi));

// otherApp.js
import {
    sum,
    pi
} from "/utils.js";
console.log('2π = ' + sum(pi, pi));

// 8. Promise
//   - ES5
// function showMessAfterTimeout(msg, who, timeout, onDone) {
//     setTimeout(function() {
//         onDone(msg + ' Hi ' + who + '!');
//     }, timeout);
// }
// showMessAfterTimeout('', 'Foo', 100, function(msg) {
//     showMessAfterTimeout(msg, 'Bar', 200, function(msg) {
//         console.log('Finish after 300ms:' + msg);
//     });
// });
// - ES6
function showMessAfterTimeout(msg, who, timeout, onDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
showMessAfterTimeout("", "Foo", 100).then((msg) =>
    showMessAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
});

// 9. Loops
//   - Give an example for each method: 
//     + for…of
//     + findIndex()

// + for…of\
const arr = ['a', 'b', 'c'];

for (const element of arr) {
    console.log(element);
}

//findIndex()

const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
    return age > 18;
}