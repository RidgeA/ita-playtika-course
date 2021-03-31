// setTimeout(fn, ms)

function asyncFunction(cb) {
  setTimeout(() => {
    cb(null, 42);
  }, 100);
}


function asyncFunctionPromise() {
  return new Promise((resolve, reject) => {
    asyncFunction((err, data) => {
      if (err) {
        return reject(err)
      }
      return resolve(data)
    })
  })
}

// Promises

// asyncFunctionPromise()
//   .then((data) => {
//     console.log('then ', data);
//     return 2 * data
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('catch ', err);
//   });


// async functions


async function f() {
  try {
    // const result = await asyncFunctionPromise()
    // console.log(result);

    const resultAll = await Promise.race([
      asyncFunctionPromise(),
      asyncFunctionPromise(),
      asyncFunctionPromise(),
    ]);
    console.log(resultAll);
  } catch (err) {
    console.log(err.message);
  }
}

f();
