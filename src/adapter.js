// adapter - make a new file that makes all of my fetch and post request
function getToys() {
    // fetch data
    return fetch(`http://localhost:3000/toys`)
    .then(r => r.json())// fetch is always going to have this step where I get that response which is a full HTTP response
    //.. which has a bunch of keys on it but when i 'r.json() on it ' it is just gonig to pull off the body off of it/ the
    //.. information that I want to look at and It is going to convert it into readable json for me

    // RETURN WHEN YOU GET undefined
}

function createToy(data) {
    console.log(data)
    const url = `http://localhost:3000/toys`
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // "hey I am sending you some data type json is that ok with you are you type json too?"
        // 'and yes we are giving you json apis'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then(r => r.json())
}

function updateLikes(data, id) {
    const url = `http://localhost:3000/toys/${id}`
    return fetch(url, {
      method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // "hey I am sending you some data type json is that ok with you are you type json too?"
        // 'and yes we are giving you json apis'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then(r => r.json())
}
