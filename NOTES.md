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



///////////////////////////////////////////////////////////////////////////
How to solve the following problem? - I posted data and I want to update it
- 1) If we have a nice restful api it might be sending us some useful data
/////////////////

Optimistic Rendering:
You are hopeful that our post works and we put it on the
dom before waiting to see what our post request returns.

So the information that I need to put it on the page


///////////////////

Adding something else on to an existing string/ element:
```javascript
const collection = document.querySelector('#toy-collection')
collection.innerHTML += innerHTML (some new string)

// an element like this (VVV) is a string:
div.innerHTML = `<h2>${toy.name}</h2>
<img src=${toy.image} class="toy-avatar" />
<p>${toy.likes} Likes </p>
<button class="like-btn">Like <3</button>`
```
============================
- Optimistic rendering =>
    - cases when its good and easy to use optimistic
    rendering something like this is great.
     case 1: If you are like upvoting or downvoting something
         - I dont think everytime you upvote a post on reddit
         it goes to a server and it waits to increase your front end until that server responds back. When we are making small little edits we can use this optimistic rendering where we increse the count and then it makes the request and we dont have to do anything when the request comes back.

Q: When is the best time to add an event listener?
We have to know that those divs are on the page before we
add event listeners

Q: how to deal with likes?
1st way - is to do it everytime we make a new toy card add an evert listener
2nd way - event delegation: add it at the time you create the object

adding event listeners Inline:
- The trick here is when you are adding events listeners to things aren't on the page from the initial html when you are adding event listeners to things that you're putting on the page as a result of a fetch you're starting to deal with the asynchronous nature of JavaScript. You need to know that you're adding an event listener at a time when that thing exists so your code doesn't break. PS its a lot for your brain to track!
- I always like doing it right when I create this thing (div.innerHTML). If I want to add an event listener to this button (this button is a string right now:

    div.innerHTML = `<h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes} Likes </p>
    <button class="like-btn">Like <3</button>`

    ). How do I get that button to add an event listener on it? put the listener on the div because the div is an object that we have
    - or the other option that we have is -
    When does this ^^^ turn from string into object?
    after append!
    Because I can add an event listener to an object but adding an event listener to a string seems tough ha ha.
    - or the other option that we have is -
    We can make the button an element then add that
    button element to the div

//////////////////////
div.setAttribute() - can also take a type of property and a value of to what we want to set that property to.
google-set attribute dataset javascript
//////////
Always when I add an event listener if i want to interact with the element I get it through our event like this (increaseLikes(e)) because I have a bunch of buttons on their and the event is the only way I can tell which button we are talking about right now
/////////
using dataset:
context: the id for the toy
- how do we access the toy id -> div.dataset.id = toy.id
when we look at the id on the dom the id of the toy is going to be data-id. But the way we call it off an element is dataset that is just the interface of JavaScript provides us
////////////////
We are getting the likes updated. But they are NOT showing up on the page until we refresh. This is where optamistic rendering comes in. What I am going to do is:
1. find him
2. and find his likes and update them  
