import validateEmail from "../src/validateEmail";

test('test valid email', () => {
    expect(validateEmail('me@winghimjns.com')).toBe(true);
    expect(validateEmail('winghim@example.com')).toBe(true);
    expect(validateEmail('winghim@dataking.co.kr')).toBe(true);
});

test('test invalid email', () => {
    expect(validateEmail('winghimjns.com')).toBe(false);
    expect(validateEmail('example.com')).toBe(false);
    expect(validateEmail('winghim@data king.co.kr')).toBe(false);
});
