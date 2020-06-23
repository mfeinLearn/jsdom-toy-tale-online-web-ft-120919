// adapter - make a new file that makes all of my fetch and post request
function getToys() {
    // fetch data
    return fetch(`http://localhost:3000/toys`)
    .then(r => r.json())// fetch is always going to have this step where I get that response which is a full HTTP response
    //.. which has a bunch of keys on it but when i 'r.json() on it ' it is just gonig to pull off the body off of it/ the
    //.. information that I want to look at and It is going to convert it into readable json for me

    // RETURN WHEN YOU GET undefined
}
