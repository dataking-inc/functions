## formDataObject(formData: FormData)

Turn a FormData object to be an JavaScript object. Which should be a string only key-value pair.

Example:

`form.html`
```html
<form id="form">
    <input name="foo" value="bar" />
</form>
```


`app.js`
```js
const form = document.getElementById('form');
formDataObject(new FormData(form)).foo // will get "bar"
```
