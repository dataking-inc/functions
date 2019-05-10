# @dataking/function

A package of helper curried functions composed with functional approach.

# Usage

There isn't any otherways to do it for now. But we keep updating this package

```js
npm install @dataking/functions
```


# Documentation

This document and example of usage are shown below


## formDataObject(formData: FormData)

Turn a FormData object to be an JavaScript object. Which should be a string only key-value pair.

Example:

`form.html`
```html
<form id="form">
    <input name="foo" value="bar" />
</form>
```


`app.js`
```js
const form = document.getElementById('form');
formDataObject(new FormData(form)).foo // will get "bar"
```

## format(params: StringKV, format: string): string

A little string format function for composing sentence / string in your application. This function will take 2 arguments
which the first one should be an object which the key should be the placeholder in the template, and the value should be
the result which will replace the placeholder.

Usage: 

```js
const weatherSentance = format({'{temperature}': '30'});
weatuerSentance("It's {temperature}°C‎ today."); // "It's 30°C‎ today."
```

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

## instanceOf(type: Function, instance: any): boolean

To check if an object is a prototype / instance of something. Note that for functional purpose, 1st parameter is the
class, and the 2nd parameter should be the instance which is going to be checked.

As JavaScript is a Prototype-based language, we may apply the `instanceOf(Class, object)` syntax. (compare to other 
language like PHP, the function needs the be run like `instanceOf(Class::class, object)` to pass the class into the 
function).


```js
const isString = instanceOf(String);
isString('hello, world'); // true
isString(123); // false
```

And surely this can be applied to custom class

```js
class Animal { /** ... **/ }
class Cat extends Animal { /** ... **/ }
class Dog extends Animal { /** ... **/ }
const isCat = instanceOf(Cat);
const isDog = instanceOf(Dog);
const isAnimal = instanceOf(Animal);
const cat = new Cat();
const dog = new Dog();

// let's test
isCat(cat); // true
isDog(dog); // true
isDog(cat); // false
isCat(dog); // false
isAnimal(cat); // true
isAnimal(dog); // true
```

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

## submitEventData(event: Event)

Fetch the form data from a form submitting event

Example in React:

```jsx
function SubmitForm(props) {

    const onSubmit = event => console.log(submitEventData(event)); // would log an object >>> { foo: "bar" }

    return (
        <form onSubmit={onSubmit}>
            <input name="foo" value="bar" />
        </form>
    );
}
```

Or usage with ramda in a functional approach:

```js
const onSubmit = R.pipe(
    submitEventData,
    R.tap(console.log) // log the object out
);
```

## validateEmail(email: string)

Validate a email, return `true` if the input is a valid email, false otherwise.

```js
validateEmail('winghim@dataking.co.kr'); // true
validateEmail('winghim@dataking'); // false
validateEmail('foo.bar'); // false
```
