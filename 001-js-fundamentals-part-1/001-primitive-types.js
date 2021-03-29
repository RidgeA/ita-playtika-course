'use strict'
// |var|let|const
// variable name - $_a-z0-9
//

// n0 = 0; // legacy
// var n1 = 1; // legacy
let n2 = 2;
const n3 = 3;

// number
// special cases: NaN, +-Infinity
let nubmer1 = 1;
let nubmer2 = 0b01111;
let nubmer3 = 0x1fffff;
let number4 = 1.000001;

let number5 = 1 + 2; // - / *
let number6 = 2 ** 10; // Math.pow(2, 10);
let number7 = Math.pow(2, 10);

// string
// template literals
let str = '11\n23';
let str1 = '12\'34';
let str2 = `
first string
second string
`;

let str3 = `${str2}
third string
`;

let st4 = str2 + '\n' + str3;

let str5 = st4.replace('search_string', 'repl') // regexp, function
str5.match(/.*/); // true/false

// boolean
let b1 = true; // /false

// null
let n = null;

// undefined
let undef = undefined;
let v;

// Symbol
let s1 = Symbol('1234');
let s2 = Symbol('1234');
s1 === s2 // false

// Symbol.iterator


// BitInt
let bigInt1 = BigInt('123412341234120347120371209743017324');
let bigInt2 = 123412341029102743073412734017324n;
// + - / * | & >> <<

bigInt1 + bigInt2

// bigInt1 + 1123
