## format(params: StringKV, format: string): string

A little string format function for composing sentence / string in your application. This function will take 2 arguments
which the first one should be an object which the key should be the placeholder in the template, and the value should be
the result which will replace the placeholder.

Usage: 

```js
const weatherSentance = format({'{temperature}': '30'});
weatuerSentance("It's {temperature}°C‎ today."); // "It's 30°C‎ today."
```
