//example == and ===
let x = 5;
document.getElementById("compare_value").innerHTML = (x == 5);
document.getElementById("compare_type").innerHTML = (x === "5");
//- Give an example for each of the following methods in Javascript
// + Map
const numbers = [4, 9, 16, 25];
document.getElementById("map").innerHTML = numbers.map(Math.sqrt);
//+ filter
const ages = [12, 6, 16, 9];

document.getElementById("filter").innerHTML = ages.filter(check_age);

function check_age(age) {
    return age >= 10;
}
// + reduce
const reduce_arr = [55, 15, 15];
document.getElementById("reduce").innerHTML = reduce_arr.reduce(except);

function except(total, num) {
    return total - num;
}
//+ find
const find_arr = [3, 10, 18, 20];

document.getElementById("find").innerHTML = find_arr.find(check_num);

function check_num(num) {
    return num > 5;
}
// + some
const some_arr = [3, 10, 2, 5];
document.getElementById("some").innerHTML = some_arr.some(check_some);

function check_some(num) {
    return num > 10;
}
//- Give an example for add a new element to an array[] (at the end)
const arr = [1, 2, 3];
arr.push(4);
document.getElementById("push").innerHTML = arr;
//- Give an example for add a new element to an array[] (at the beginning)
const unshift_arr = [1, 2, 3];
unshift_arr.unshift(4);
document.getElementById("unshift").innerHTML = unshift_arr;
//- Give an example for removing an element in array[]
var list = [1, 2, 3, 4];
list.splice(2);
document.getElementById("splice").innerHTML = list;
//1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function triple(a, b) {
    if (a == b) {
        return 3 * (a + b);
    } else {
        return (a + b);
    }
}
document.getElementById("sum").innerHTML = triple(10, 5);
document.getElementById("triple").innerHTML = triple(10, 10);
//2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function difference(a) {
    if (a <= 19) {
        return (19 - a) * 3;
    } else {
        return (a - 19) * 3;
    }
}
document.getElementById("bigger").innerHTML = difference(26);
document.getElementById("small").innerHTML = difference(17);
document.getElementById("similar").innerHTML = difference(19);

//3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
//Input: a = '1*9'
function asterisk(a) {
    const arr = [];
    for (var i = 0; i <= 9; i++) {
        str = a.replace("*", i);
        if (str % 3 == 0) {
            arr.push(str);
        }
    }
    document.getElementById("asterisk").innerHTML = arr;
}
asterisk("1*9");
//Input: a = '1234567890*'
function asterisk1(a) {
    const arr = [];
    for (var i = 0; i <= 9; i++) {
        str = a.replace("*", i);
        if (str % 3 == 0) {
            arr.push(str);
        }
    }
    document.getElementById("asterisk1").innerHTML = arr;
}
asterisk1("1234567890*");

//4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
//Input: a = '1*9'
function asterisk6(a) {
    const arr = [];
    for (var i = 0; i <= 9; i++) {
        str = a.replace("*", i);
        if (str % 6 == 0) {
            arr.push(str);
        }
    }
    document.getElementById("asterisk6").innerHTML = arr;
}
asterisk6("1*9");
//Input: a = '1234567890*'
function asterisk62(a) {
    const arr = [];
    for (var i = 0; i <= 9; i++) {
        str = a.replace("*", i);
        if (str % 6 == 0) {
            arr.push(str);
        }
    }
    document.getElementById("asterisk62").innerHTML = arr;
}
asterisk62("1234567890*");