// functions

function f1() {

}

const f2 = function () {
}

// const f2 = f1

const f3 = new Function('a', 'b', 'return a + b');
f3(1, 2)

// function f4(...args) {
//   return args.reduce((acc, item) => acc + item)
// }
//
// console.log(f4(1, 2, 3, 4, 5))

function f5(a, b, ...restArgs) {
  console.log(a, b, restArgs);
}

f5(1, 2, 3, 4, 5);

function f6 (v) {
  if (typeof v === 'string') {
    // ...
  }
  if (typeof v === 'number') {
    // ...
  }
}
