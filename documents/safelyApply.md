## safelyApply(params: ListOfAny, callback: any)

The purpose for this function is for the case when the user isn't so sure the function is actually stored correctly. 
Accepting the list of params for the 1st argument and the callback as the 2nd argument. Note that this function is 
curried.

Example:

```js
safelyApply([1,2,3,4,5,6,7], Math.max); // output >>> 7
safelyApply([1,2,3,4,5,6,7], NaN); // output >>> null
safelyApply([1,2,3,4,5,6,7])(undefined); // output >>> null
safelyApply([])(Array) // output >>> []
```
