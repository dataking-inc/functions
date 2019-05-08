## submitEventData(event: Event)

Fetch the form data from a form submitting event

Example in React:

```jsx
function SubmitForm(props) {

    const onSubmit = event => console.log(submitEventData(event)); // would log an object >>> { foo: "bar" }

    return (
        <form onSubmit={onSubmit}>
            <input name="foo" value="bar" />
        </form>
    );
}
```

Or usage with ramda in a functional approach:

```js
const onSubmit = R.pipe(
    submitEventData,
    R.tap(console.log) // log the object out
);
```
