## method(callback: function)

Simple call the first argument...That's it.

This is useful for functional programming especially in the situation that you don't really want to split the 
functional chain.

So you can do something like:

```js
R.pipe(
    // ...... (some operation)
    method,
    // ...... (some other operation)
);
```

Instead of:

```js
R.pipe(
    // ...... (some operation)
    prop => prop(),
    // ...... (some other operation)
);
```
