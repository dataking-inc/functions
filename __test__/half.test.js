import half from "../src/half";

test('positive', () => {
    expect(half(7)).toBe(3.5);
    expect(half(4)).toBe(2);
});

test('negative', () => {
    expect(half(-10)).toBe(-5);
    expect(half(-17)).toBe(-8.5);
});

test('zero', () => {
    expect(half(0)).toBe(0);
});
