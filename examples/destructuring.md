```js

obj1 = { a:1 ,        c:3 }
obj2 = { a:'x' , b: 'y' ,      d:'z' }
obj3 = { ...obj1, ...obj2,      x:123 }

obj3
// {a: 'x', c: 3, b: 'y', d: 'z', x: 123}
nested = { pancakes: 1 }
obj1 = { a:1 ,        c:3, nested }
obj2 = { a:'x' , b: 'y' ,  nested: { banana: 2 },    d:'z' }
obj3 = { ...obj1, ...obj2,      x:123 }

obj3
// {a: 'x', c: 3, nested: {…}, b: 'y', d: 'z', …}

// nested: {banana: 2}

obj2.nested.banana = 13
// 13

obj3.nested
// {banana: 13}

```
