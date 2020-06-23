
// the call back is going to hold all my things this is going to be the kick off for my code it is going to initalize everything and call it off
document.addEventListener("DOMContentLoaded", () => {
    // fetch some data and render things

    // get toys returns an array of toys
    // if we chain then onto it, the function then calls the callback function
    // which will recieve those toys as an argument

    getToys()
        .then(showToys)// (extra) .then is passing those toys in //.then(r => console.log(r)) or // callback function - .then(console.log)

});

function showToys(toys) {
    // take toys and put them on the page
    const collection = document.querySelector('#toy-collection')
    toys.forEach(toy => {
        // put toy on dom -> <div class="card">

        // created element
        const div = document.createElement('div')

        // added properties
        div.className = 'card'
        // div.innerText = toy.name

        div.innerHTML = `<h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes} Likes </p>
    <button class="like-btn">Like <3</button>`

        // append to DOM
        collection.append(div)
    })
}

const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
let addToy = false;


addBtn.addEventListener("click", () => {
// hide & seek with the form
addToy = !addToy;
if (addToy) {
  toyFormContainer.style.display = "block";
} else {
  toyFormContainer.style.display = "none";
}
});
