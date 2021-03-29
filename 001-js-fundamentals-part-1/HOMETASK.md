1. Given array of events:

```javascript
const events = [
  {
    "timestamp": new Date('2021-03-28 15:00:00')
    "payload" : {/*...*/}
  },
  {
    "timestamp": new Date('2021-03-28 16:00:00')
    "payload" : {/*...*/}
  },
  {
    "timestamp": new Date('2021-03-15 15:00:00')
    "payload" : {/*...*/}
  },
  {
    "timestamp": new Date('2021-03-15 16:00:00')
    "payload" : {/*...*/}
  },
]
```

Write a code to group events by day, e.g. the result will be 
```javascript
const result = {
  '2021-03-28': [
    {
      "timestamp": new Date('2021-03-28 15:00:00')
      "payload" : {/*...*/}
    },
    {
      "timestamp": new Date('2021-03-28 16:00:00')
      "payload" : {/*...*/}
    },
  ],
  '2021-03-15': [
    {
      "timestamp": new Date('2021-03-15 15:00:00')
      "payload" : {/*...*/}
    },
    {
      "timestamp": new Date('2021-03-15 16:00:00')
      "payload" : {/*...*/}
    },
  ]
}
```
