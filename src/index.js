
// the call back is going to hold all my things this is going to be the kick off for my code it is going to initalize everything and call it off
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector("#new-toy-btn");
    const toyFormContainer = document.querySelector(".container");
    let addToy = false;
    // fetch some data and render things

    // get toys returns an array of toys
    // if we chain then onto it, the function then calls the callback function
    // which will recieve those toys as an argument

    getToys()
        .then(showToys)// (extra) .then is passing those toys in //.then(r => console.log(r)) or // callback function - .then(console.log)

    addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
      // submit listener here
      const form = document.querySelector('form') // to select the form - only okay if only one form
      // console.log(form)
      form.addEventListener('submit', submitForm)
    } else {
      toyFormContainer.style.display = "none";
    }
    });

    function submitForm(e) {
        e.preventDefault()
        const name_input = e.target.name
        const image_input = e.target.image
        console.log("form submitted")

        const data = { // this represents the data that I want to send back
          "name": name_input.value,
          "image": image_input.value,
          "likes": 0
        }

        createToy(data)
            .then(showToy)



        name_input.value = ""
        image_input.value = ""
    }

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
});

function showToy(toy) {// a function that puts one toy on the dom
    const collection = document.querySelector('#toy-collection')
    const div = document.createElement('div')// -> created element
    // added properties
    div.className = 'card' // lives in js
    // div.innerText = toy.name

    // lives in js
    div.innerHTML = `<h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes} Likes </p>
    <button class="like-btn">Like <3</button>`

    // append to DOM
    collection.append(div) //-> put on the dom
}
