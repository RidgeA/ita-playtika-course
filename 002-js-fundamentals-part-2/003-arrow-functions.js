const f1 = (a, b) => {
  return a + b;
}

const f2 = (a, b) => a + b;

const f3 = a => b => a + b;

const f4 = (a) => {
  return (b) => {
    return a + b;
  }
}

const f5 = (...args) => {
  // arguments
}
