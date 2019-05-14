## hasSameAttr(attr: string | number, a: Object, b: Object): boolean

The 1st parameter is the key. The purpose of this function is to check if 2nd and 3rd argument has the same 
(identity `===`) value.

```js
const a = { first: 'John', last: 'Cage' };
const b = { first: 'John', last: 'Terry' };
const c = { foo: 'bar' };
hasSameAttr('first', a, b); // true
hasSameAttr('last', a, b); // false
hasSameAttr('foo', a, b); // false
hasSameAttr('foo', b, c); // false
```
