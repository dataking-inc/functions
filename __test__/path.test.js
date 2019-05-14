import path from "../src/path";

test('test with array path syntax', () => {
    const foo = {a: {b: {c: {d: 'hello, world'}}}};
    expect(path(['a', 'b', 'c', 'd'])(foo)).toBe('hello, world');
});

test('test with string path syntax', () => {
    const foo = {a: {b: {c: {d: 'hello, world'}}}};
    expect(path('a.b.c.d')(foo)).toBe('hello, world');
});
