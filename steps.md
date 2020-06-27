1. Add DOMContentLoaded event listener. This will execute all your code once the page loads.

2. Fetch some data and put things on the page

3. To put things on page(on the dom): - (two ways) 1st. innerHtml - 2nd. createElements

// CREATE ELEMENT WAY
- create an outer element
- add properties to it
- add innerHTML to it?
- add event listeners to it
- put it on the DOM (So when we do this document.createElement we are creating an element and it lives here in javascript but until
I tell some element on the page to .append it it does not live on the dom it lives in our js file.
By contrast if I am using innerHTML and I am just setting the HTML of something that already exist on the page I dont need to append it it already lives their i'm changing the thing that already lives on the page )
- if you haven't append it , it isn't on the DOM

4. DOMContentLoaded should also add any event listeners for things ALREADY on the DOM(in your index.html)(also if it is something you are putting on the page if it is an element you are adding you can not add that event listener until it exists on the page which which it probably wont at this point. This code runs like immediaately after the page loads. If I'm fetching data and putting things on the page those wont exist yet but this form exists because its already in here in the HTML)
4. Listen for form submission
5. Grab input information
6. send somewhere



### Setting up a Form Event listener
- grab reference to the form
- add a submit event listener to the form
- PERVENT DEFAULT
- get values
- send values somewhere


## Many event listeners
- add it at the time you create the object
- use event delegation(is where we put the event listener on the entire page and then inside that event listener it's listening for a click anywhere on the page but we put logic in it that says execute code if it's the delete button or the like button other wise ignore it. -> When we use event delegation the callback function gets execute a lot but it has logic inside it that says only run code in this case.)
