
let addToy = false;

// How can I wait until the page loads before I do anything?
//.. addEventListener DOMContentLoaded
//.. This waits until the dom is loadedVVVV
document.addEventListener("DOMContentLoaded", () => { //DOMContentLoaded and callback
  // console.log("%cDom is loaded", "color :red")
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.querySelector("#toy-collection")
  fetch("http://localhost:3000/toys")
  .then(r => r.json()) // get a response that I will parse to json
  .then(toys => {
      // Take my toys array make HTML with them in ORDER TO ADD THEM TO THE DOM.
      // what type of function do we know that can take an array and make it into something
      // .. else in a 1 to 1 transformation?
      let toysHTML = toys.map(function(toy){
          return `
          <div class="card">
            <h2>${toy.name}</h2>
            <img src=${toy.image} class="toy-avatar" />
            <p>${toy.likes} Likes </p>
            <button data-id="${toy.id}" class="like-btn">Like <3</button>
            <button data-id="${toy.id}" class="delete-btn">back in the toy chest</button>
          </div>
          `
      })
      toyCollection.innerHTML = toysHTML.join('')
      //document.querySelector("#toy-collection").innerHTML = toysHTML.join('')
      //console.log(toysHTML.join(''))
  })

  toyFormContainer.addEventListener("submit", function(e){
      e.preventDefault()
      console.log("checking out e.target: ", e.target) // $0 == e.target
      const toyName = e.target.name.value
      const toyImage = e.target.image.value
      console.log(toyName, toyImage)

      fetch(`http://localhost:3000/toys`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              name: toyName,
              image: toyImage,
              likes: 99
          })
      })
      .then(r => r.json())
      .then(newToy => {
          //fetch updated the DB
          //NOW I NEED TO UPDATE THAT DOM!

          //convert the newToy from JSON to HTML in ORDER TO ADD TO DA DOM
          let newToyHTML = `
          <div class="card">
            <h2>${newToy.name}</h2>
            <img src=${newToy.image} class="toy-avatar" />
            <p>${newToy.likes} Likes </p>
            <button data-id="${newToy.id}" class="like-btn">Like <3</button>
            <button data-id="${newToy.id}" class="delete-btn">back in the toy chest</button>
          </div>
          `

        toyCollection.innerHTML += newToyHTML
        console.log(e.target.reset())
      })
  })

  toyCollection.addEventListener("click", (e) => {
      // how can I make those likes unique?
      // I am listening for a click anywhere in the toy collection
      //.. but now I am listening only if a button with a class name of like-btn
      //.. is being called
      if (e.target.className === "like-btn") {
          // aside: you can qurery select within the card
           // e.target. == $0.
          console.log("This is e.target", e.target.previousElementSibling.innerText)//e.target is the button
          let currentLikes = parseInt( e.target.previousElementSibling.innerText)
          let newLikes = currentLikes + 1
          e.target.previousElementSibling.innerText = newLikes + " likes"
            // ^^ this updated the dom

            // VV this fetch updated the database
          fetch(`http://localhost:3000/toys/${e.target.dataset.id}`, {
              method: "PATCH",
              headers:
              {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ // what are we sending over?
                likes: newLikes
            })
          })
      }

      if (e.target.className === "delete-btn") {
          fetch(`http://localhost:3000/toys/${e.target.dataset.id}`, {
              method: "DELETE"
          })
          .then(r => {
              e.target.parentElement.remove()
          })
      }
      // console.log(typeof(e.target))
  })

  // addBtn will wait until the content is loaded
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


// update the dom && fetch
// pesamisticlly or optimisticly
// 1) updating the database first
