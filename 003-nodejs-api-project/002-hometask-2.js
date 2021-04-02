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
  }, timeout));
}

input.reduce((p, input) => {
  return p.then(() => {
    return process(input)
  })
}, Promise.resolve())
