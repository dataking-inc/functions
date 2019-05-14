## path(path: string | Array<String>, object: {}): any

Basically the same function as Ramda's `R.path`, but it accepts a much readable usage which is the string style. For 
example, you have an object foo and `const foo = {a: {b: {c: {d: 'hello, world'}}}};`. You may run 
`dkjs.path('a.b.c.d', foo)` instead of `dkjs.path(['a', 'b', 'c', 'd'], foo)` to get your "hello, world".

The Ramda traditional "array path syntax" is good and we should keep it. As dots (`.`) could be part of the JavaScript
object key, so we should keep both.

Example: 

```js
const foo = {a: {b: {c: {d: 'hello, world'}}}};
path(['a', 'b', 'c', 'd'])(foo); // get "hello, world"
path('a.b.c.d')(foo); // also get "hello, world"
```
