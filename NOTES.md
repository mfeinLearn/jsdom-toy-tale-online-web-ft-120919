What does this do in a fetch request?
```javascript
body: JSON.stringify(data)
```

A great way to demonstrate this is the following code:

```javascript
obj = {key: 'value'}
JSON.stringify(obj)
```
output is the following:
```javascript
"{"key":"value"}"
```
^^^ That is a string!
Because we are sending it over the internet so we need to make it a JSON object that is a string. We can not handle sending symbols or more complex data types over the internet. So before we send information we have to send it in the only way we know how which is a giant string.

Q: what is the target ( event.target ) of a submission?
A: All of the form

Q: what is the target of a button click?
A: The button

Q: How to add an event listener to the form?
A: Grab the form by class

- aside: If you querySelect the class you'll get an array back then I'll have to navigate to the first element

Q: What does a callback function for a form do?

-> It is hardcoded into HTML that is what forms do. Form send data somewhere

-> Writing forms:
- in js land you'll be writing functions:
1. where you listen for the form submit
2. preventDefault
3. do your own thing with the form (do your own post request)

Q: how to get form values?

Q: how you query select inputs?

<input name = "image">:
if you have a name on the inputs the name value is added as a property to the form

////
Cool JS tricks!
document.querySelector('input[name="name"]');

document.querySelector('input[name="image"]');

document.querySelector('form');

document.querySelector('form');

document.querySelectorAll(".input-text");
