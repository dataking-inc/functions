## ifElseValue<Yes, No>(yes: Yes, no: No, boolCallback: any): Yes | No

Accept 3 parameters. The 1st and the 2nd ones could be anything and it's not restricted.

- If the 3rd parameter: 
  - is a callback, it will be run and check if the result is a positive value.
  - is anything else, itself will be checked if it's a positive value.

If a positive value is got, 1st parameter will be returned. Otherwise 2nd value will be returned.

**This function is useful when you need to shorten the conditions in a function chain.**

Note that this function is curried. Thanks `ramda`.


```js
const girlFriends = me.getGirlFriendList();
const react = ifElseValue('happy', 'sad');
console.log(`I am ${react(girlFriends.length)}.`); // happy if I have at least one girlfriend. sad otherwise :(
```

And also the 3rd parameter could be a callback as well

```js
const date = new Date();
const whatToDo = ifElseValue('stay home', 'go to church');
console.log(`I should ${whatToDo(date.getDay.bind(date))} today.`); // (new Date()).getDay() would return 0 if it's Sunday, then go to church ~
```
