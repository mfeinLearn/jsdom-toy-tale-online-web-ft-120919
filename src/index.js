const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
let addToy = false;

// How can I wait until the page loads before I do anything?
//.. addEventListener DOMContentLoaded
//.. This waits until the dom is loadedVVVV
document.addEventListener("DOMContentLoaded", () => { //DOMContentLoaded and callback
  // console.log("%cDom is loaded", "color :red")

  fetch("http://localhost:3000/toys")
  .then(r => r.json) // get a response that I will parse to json
  .then(toys => {
      // Take my toys array make HTML with them in ORDER TO ADD THEM TO THE DOM.
      // what type of function do we know that can take an array and make it into something
      //.. else in a 1 to 1 transformation?
      toys.map(function(){
          return `
          <div class="card">
            <h2>Woody</h2>
            <img src=toy_image_url class="toy-avatar" />
            <p>4 Likes </p>
            <button class="like-btn">Like <3</button>
          </div>
          `
          //
      })
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
