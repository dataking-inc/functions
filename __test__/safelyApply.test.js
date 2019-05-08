import safelyApply from "../src/safelyApply";

test('pass a function as the 2nd parameter, uncurried', () => {
    expect(safelyApply([-7], Math.abs)).toEqual(7);
    expect(safelyApply([-2, 3, 7, -3, 4, 11, 0], Math.max)).toEqual(11);
    expect(safelyApply([13.456], Math.floor)).toEqual(13);
});

test('pass a function as the 2nd parameter, curried', () => {
    expect(safelyApply([-7])(Math.abs)).toEqual(7);
    expect(safelyApply([-2, 3, 7, -3, 4, 11, 0])(Math.max)).toEqual(11);
    expect(safelyApply([13.456])(Math.floor)).toEqual(13);
});

test('pass a non-function as the 2nd parameter, curried', () => {
    expect(safelyApply([-7])(false)).toBeNull();
    expect(safelyApply([-2, 3, 7, -3, 4, 11, 0])(undefined)).toBeNull();
    expect(safelyApply([13.456])(null)).toBeNull();
});

test('pass a non-function as the 2nd parameter, curried', () => {
    expect(safelyApply([-7])(false)).toBeNull();
    expect(safelyApply([-2, 3, 7, -3, 4, 11, 0])(undefined)).toBeNull();
    expect(safelyApply([13.456])(null)).toBeNull();
});
