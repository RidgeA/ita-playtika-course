// Object
let obj1 = {
  prop1: 1,
  'some-prop': 2,
  12312: 'another-value',
}

obj1.prop1 = 10;

obj1['some-prop'] = 20;

let lookupProperty = 'some-prop';
obj1[lookupProperty] = 30;

JSON.stringify(obj1) // value -> json string
JSON.parse('{}') // json string -> value

// Date
let date1 = new Date();
console.log(date1.toString()); // moment / date-fns / luxon
console.log('Day of week: ', date1.getDay());
console.log('Month (zero-based): ', date1.getMonth());
console.log('TimeZone offset: ', date1.getTimezoneOffset());

let date2 = new Date('2021-01-01 15:00:00');
console.log(date2);

let date3 = new Date('2021-01-01 15');
console.log(date3);

// Boolean/String/Number
let stringObj = new String('asdfadsf'); // not recommended
let stringVal = 'asdfadsf'

let number = Number('123');
console.log('boolean: ', number, typeof number);

// Array
// array methods
let arr = [];
console.log('Typeof arr', typeof arr);
console.log('isArray', Array.isArray(arr)); // legacy - arr.length === undefined
arr.push(1);
arr.push('asdfa');
console.log('Top element: ', arr.pop());
console.log('Length: ', arr.length);

arr.unshift(0);
console.log('Length: ', arr.length);

arr.shift();
console.log('Length: ', arr.length);

let numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(function (item, index, array) {
  sum += item;
})
console.log("sum :", sum);

let numbersx2 = numbers.map(function (item, index, array) {
  return item * 2;
});

console.log("double: ", numbersx2);
console.log("original: ", numbers);


console.log(1 / 'a');
console.log(1 / 0);
console.log(-1 / 0);

// parseInt(string, radix?) - radix = 2-36
// iteration1: item '10', index = 0 => 10
// iteration2: item '10', index = 1 => NaN
// iteration3: item '10', index = 2 => 2
console.log(['10', '10', '10'].map(parseInt));

console.log(['10', '10', '10'].map(function (item, index, array) {
  return parseInt(item, undefined)
}));

console.log(numbers.filter(function (item, index, array) {
  return item % 2;
}));

let sum2 = numbers.reduce(function (prev, item, index, array) {
  return prev + item;
}, 0);
console.log(sum2);

console.log('slice :', numbers.slice(2, 4));
console.log('slice :', numbers.slice());
console.log('slice :', numbers.slice(-2));

console.log('splice :', numbers.splice(3, 1));
console.log('splice result :', numbers)
console.log('splice :', numbers.splice(2, 1, 10, 20));
console.log('splice result 2:', numbers)

// Error/TypeError/RangeError
const error = new Error('');

function f(str) {
  if (typeof str !== 'string') {
    throw new TypeError('should be a string');
  }
}

// Map/WeakMap

let obj = {
  'key': 'value',
}

let map = new Map();
map.set('key', 'value');
map.set(obj, [obj]);

let weakMap = new WeakMap();
weakMap.set(obj, [obj]);

// Set/WeakSet

let set = new Set();
set.add(obj);
set.add(obj);
console.log('Set length: ', set.size);

// Math
// Math.pow()
// Math.min()/max()

// RegExp

let re1 = new RegExp('.*', 'g');
let re2 = /(.*)/g;

re2.exec('asdf');
