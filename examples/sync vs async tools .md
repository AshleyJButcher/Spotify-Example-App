
```js

Promise.resolve(1)
    .then( x => x + 2 ) 
    .then(console.log, console.error) 

console.log('this goes first')

// this goes first
// 3

```
// Sync
value 
[...values]

// Async Push
Promise(()=>value)
Observable(()=>...values)

// Pull 
iterator
asyncInterator

