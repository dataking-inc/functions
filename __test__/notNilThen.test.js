import notNilThen from "../src/notNilThen";

class Test {
    output() { return 'I go to school by bus'; }
}

test('when instance if null', () => {
    expect(notNilThen(instance => instance.output())(null)).toBe(null);
    expect(notNilThen(instance => instance.output())(undefined)).toBe(undefined);
});

test('when instance if null', () => {
    expect(notNilThen(instance => instance.output())(new Test())).toBe('I go to school by bus');
});
