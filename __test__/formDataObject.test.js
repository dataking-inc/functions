import formDataObject from "../src/formDataObject";

test('form data with 1 attribute', () => {
    const formData = new FormData();
    formData.set('foo', 'bar');
    expect(formDataObject(formData)).toEqual({foo: 'bar'});
});

test('form data with 3 attributes', () => {
    const testObject = {
        keyOne: 'valueOne',
        keyTwo: 'valueTwo',
        keyThree: 'valueThree',
    };
    const formData = new FormData();
    Object.keys(testObject).forEach(key => formData.set(key, testObject[key]));
    expect(formDataObject(formData)).toEqual(testObject);
});

test('form data with no attributes', () => {
    const formData = new FormData();
    expect(formDataObject(formData)).toEqual({});
});
