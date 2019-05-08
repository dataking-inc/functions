import instanceOf from "../src/instanceOf";

class Animal {}
class Cat extends Animal {}
class Dog extends Animal {}

const cat = new Cat();
const dog = new Dog();

test('comparison which can produce a true result, uncurried', () => {
    expect(instanceOf(Cat, cat)).toBe(true);
    expect(instanceOf(Dog, dog)).toBe(true);
    expect(instanceOf(Animal, cat)).toBe(true);
    expect(instanceOf(Animal, dog)).toBe(true);
});

test('comparison which can produce a true result, uncurried', () => {
    expect(instanceOf(Cat, dog)).toBe(false);
    expect(instanceOf(Dog, cat)).toBe(false);
});

test('comparison which can produce a true result, curried', () => {
    expect(instanceOf(Cat)(cat)).toBe(true);
    expect(instanceOf(Dog)(dog)).toBe(true);
    expect(instanceOf(Animal)(cat)).toBe(true);
    expect(instanceOf(Animal)(dog)).toBe(true);
});

test('comparison which can produce a true result, curried', () => {
    expect(instanceOf(Cat)(dog)).toBe(false);
    expect(instanceOf(Dog)(cat)).toBe(false);
});
