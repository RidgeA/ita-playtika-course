1. Write a decorator(s)

Given class.

```js
class C {
  method(arg) {
    console.log(`do something important with ${arg}`);
  }

  async methodAsync(arg) {
    const timeout = Math.round(Math.random() * 1000);
    await new Promise(resole => setTimeout(() => {
      resolve(`do something important async with ${arg}`);
    }, timeout));
    return
  }
}
```

Implement function/functions to decorate `method` and `methodAsync` methods. It should print `start` before call of the
original method and `end` after it finished.

Expected result:

```javascript
const c = new C();

c.method('argument')
// start
// do something important with argument
// stop

c.methodAsync('argument')
// start
// do something important async with argument
// stop
```

The extra task - implement the same
using [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

2. Chain of promises.

Given `input` array and `process` function:

```javascript
const input = [
  1,
  2,
  3,
]

async function process(data) {
  const timeout = Math.round(Math.random() * 1000);
  await new Promise(resolve => setTimeout(() => {
    console.log(data)
    resolve()
  }, timeout);
}
```

Implement `runInSequence` function to run `process` for each element of `input` array in sequence. Please note, that
you do not know what the length of input is going to be.

Expected result:

```javascript
runSequence(input)
// 1
// 2
// 3
```
