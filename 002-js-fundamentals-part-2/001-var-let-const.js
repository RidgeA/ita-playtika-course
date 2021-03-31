// var & let & const
var v1 = 'some value';
let v2 = 'some value';
const v3 = 'some value';

// hoisting

// console.log(i)
// var i = 0;
// console.log(i)

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0)
// }

// function f() {
//   let b = 1
//   console.log(a, b);
//   {
//     var a = 1;
//     let b = 2;
//     console.log(a, b);
//   }
//   console.log(a, b);
// }
// f()

const arr = [1, 2, 3]
arr.push(4);
console.log(arr);

const obj = {
  a: 1,
  b: 2,
  c: {
    a: {
      b: {
        c: 1
      }
    }
  }
}

const {b, c: {a: {b: c}}} = obj;
const c1 = obj.c.a.b.c;
console.log(b, c);

// const arr = [1, 2, 3];
// const [head, ...rest] = arr
