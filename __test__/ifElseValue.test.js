import ifElseValue from "../src/ifElseValue";


const yes = Symbol('yes');
const no = Symbol('no');

test('try string values, uncurried', () => {
    expect(ifElseValue('yes', 'no', () => true)).toEqual('yes');
    expect(ifElseValue('foo', 'bar', function() { return true; })).toEqual('foo');
    expect(ifElseValue('yes', 'no', () => false)).toEqual('no');
    expect(ifElseValue('foo', 'bar', function() { return false; })).toEqual('bar');
});

test('try string values, curried', () => {
    expect(ifElseValue('yes')('no')(() => true)).toEqual('yes');
    expect(ifElseValue('foo')('bar')(function() { return true; })).toEqual('foo');
    expect(ifElseValue('yes')('no')(() => false)).toEqual('no');
    expect(ifElseValue('foo')('bar')(function() { return false; })).toEqual('bar');
});

test('try symbol values, uncurried', () => {
    expect(ifElseValue(yes, no, () => true)).toEqual(yes);
    expect(ifElseValue(yes, no, function() { return true; })).toEqual(yes);
    expect(ifElseValue(yes, no, () => false)).toEqual(no);
    expect(ifElseValue(yes, no, function() { return false; })).toEqual(no);
});

test('try symbol values, curried', () => {
    expect(ifElseValue(yes)(no)(() => true)).toEqual(yes);
    expect(ifElseValue(yes)(no)(function() { return true; })).toEqual(yes);
    expect(ifElseValue(yes)(no)(() => false)).toEqual(no);
    expect(ifElseValue(yes)(no)(function() { return false; })).toEqual(no);
});
