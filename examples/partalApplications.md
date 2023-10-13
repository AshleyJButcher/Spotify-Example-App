
```js
function outer(a) {
    return function inner(b) {
        return  a + b 
    }
}
outer = a => b => a + b 
```

```js
request = ( url, token, resource, id ) => [ url, token, resource, id ].join('/')

request('localhost','2300','users','123')
// 'localhost/2300/users/123'
```

```js
request = url => token => resource => id  => [ url, token, resource, id ].join('/')

server = request('spotify.api.com')
// token => resource => id  => [ url, token, resource, id ].join('/')

session = server('1234')
// resource => id  => [ url, token, resource, id ].join('/')

users = session('users')
// id  => [ url, token, resource, id ].join('/')

users(1)
// 'spotify.api.com/1234/users/1'

```