## notNilThen(callback: Function, instance: any): any

This function will return the result by the callback (1st parameter) injected the 2nd parameter. But only if the 2nd
parameter is not nil (either `undefined` or `null`). If the 2nd parameter is a nil value, itself will be returned (so
`null` return if it's `null`, `undefined` returned if it's `undefined`).

Note that this function is curried.

Example:

```js
const thanosSnap = item => Math.random() > .5 ? item : null;
const date = thanosSnap(new Date()); // so the variable date will have 50% chance to be null
// applying `notNilThen` function here to avoid the error: "Cannot read property 'getTime' of undefined"
const result = notNilThen(date => date.getTime())(date);
```
