const events = [
  {
    "timestamp": new Date('2021-03-28 15:00:00'),
    "payload": {/*...*/}
  },
  {
    "timestamp": new Date('2021-03-28 16:00:00'),
    "payload": {/*...*/}
  },
  {
    "timestamp": new Date('2021-03-15 15:00:00'),
    "payload": {/*...*/}
  },
  {
    "timestamp": new Date('2021-03-15 16:00:00'),
    "payload": {/*...*/}
  },
];

function getKey(obj) {
  const monthNumber = obj.timestamp.getMonth() + 1;
  const monthPadded = String(monthNumber).padStart(2, '0');
  return `${obj.timestamp.getFullYear()}-${monthPadded}-${obj.timestamp.getDate()}`
}

const result = events.reduce((map, item) => {
  const key = getKey(item);
  const existing = map.get(key);
  if (!existing) {
    map.set(key, [item])
  } else {
    existing.push(item);
    map.set(key, existing)
  }
  return map;
}, new Map());

const result1 = events.reduce((map, item) => {
  const key = getKey(item);
  if (!(key in map)) {
    map[key] = [];
  }
  map[key].push(item);
  return map;
}, {});

console.log(result);
console.log(result1);
