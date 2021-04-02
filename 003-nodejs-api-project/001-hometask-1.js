class C {
  method(arg) {
    console.log(`do something important with ${arg}`);
  }

  async methodAsync(arg) {
    const timeout = Math.round(Math.random() * 1000);
    const result = await new Promise(resolve => setTimeout(() => {
      resolve(`do something important async with ${arg}`);
    }, timeout));
    console.log(result);
  }
}

function decorate(obj, methodName) {

  const old = obj[methodName];

  obj[methodName] = function (...args) {
    console.log('start');
    const result = old.call(this, ...args)

    // if (result && 'then' in result) {
    if (result instanceof Promise) {
      return result.then(result => {
        console.log('end');
        return result
      })
    }

    console.log('end');
    return result
  }
}

// decorate(C.prototype, 'method');
// decorate(C.prototype, 'methodAsync');


C.prototype = new Proxy(C.prototype, {
  get(target, key, receiver) {
    console.log('start');
    const result = target[key].call(this, ...args)

    // if (result && 'then' in result) {
    if (result instanceof Promise) {
      return result.then(result => {
        console.log('end');
        return result
      })
    }

    console.log('end');
    return result

  }
});

const c = new C()
c.method('arg');
c.methodAsync('arg');
