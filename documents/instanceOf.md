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
