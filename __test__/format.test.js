import format from "../src/format";

test('formatting strings with a single value', () => {
    expect(format({'{object}': 'world'})('hello, {object}')).toBe('hello, world');
    expect(format({'{object}': 'winghim'}, 'hello, {object}')).toBe('hello, winghim');
});

test('formatting strings with multi values', () => {
    const template = '{1}, {2}, {3}, {4}, {5}, {6}, {7}';
    const paramSet1 = { '{1}': 'a', '{2}': 'b', '{3}': 'c', '{4}': 'd', '{5}': 'e', '{6}': 'f', '{7}': 'g' };
    const paramSet2 = { '{1}': '가', '{2}': '나', '{3}': '다', '{4}': '라', '{5}': '마', '{6}': '바', '{7}': '사' };
    expect(format(paramSet1)(template)).toBe('a, b, c, d, e, f, g');
    expect(format(paramSet2)(template)).toBe('가, 나, 다, 라, 마, 바, 사');
});
