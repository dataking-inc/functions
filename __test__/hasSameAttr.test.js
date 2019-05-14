import hasSameAttr from "../src/hasSameAttr";

const a = { first: 'John', last: 'Cage' };
const b = { first: 'John', last: 'Terry' };
const c = { foo: 'bar' };

test('when two test objects has the such key', () => {
    expect(hasSameAttr('first', a, b)).toBe(true);
    expect(hasSameAttr('last', a, b)).toBe(false);
});

test('when at least either of the objects doesnt\' have the such key', () => {
    expect(hasSameAttr('foo', a, b)).toBe(false);
    expect(hasSameAttr('foo', b, c)).toBe(false);
});
