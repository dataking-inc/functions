import method from "../src/method";

test('valid callback functions', () => {
    const testValue = Symbol('test');
    expect(method(Array)).toEqual([]);
    expect(method(Object)).toEqual({});
    expect(method(String)).toBe('');
    expect(method(() => testValue)).toBe(testValue);
    expect(method(() => null)).toBeNull();
});

test('invalid callback functions', () => {
    expect(() => method(null)).toThrow(TypeError);
    expect(() => method(NaN)).toThrow(TypeError);
    expect(() => method(Math.PI)).toThrow(TypeError);
    expect(() => method(0)).toThrow(TypeError);
    expect(() => method(undefined)).toThrow(TypeError);
    expect(() => method(true)).toThrow(TypeError);
    expect(() => method(false)).toThrow(TypeError);
});
