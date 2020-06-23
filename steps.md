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


4.
