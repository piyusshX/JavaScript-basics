// fetch -> it is a method starts the process of fetching a resource from the network, returning a promise 
// that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request. A fetch() promise 
// only rejects when the request fails


// https://developer.mozilla.org/en-US/docs/Web/API/fetch
// https://youtu.be/Rive84an6Lc?si=W6uXMuM1WHWqUoSP

// Syntax -> fetch(resource) / fetch(resource, options)

// resource -> defines the resource that you wish to fetch
// options -> An object containing any custom settings you want to apply to the request.

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// A fetch() promise does not reject if the server responds with HTTP status codes that indicate 
// errors (404, 504, etc.).

// Meaning agar error 404 etc aate hai to request reject nhi hoti hai, vo resolve me hi chali jati hai.
// Kyo ki hume server ne ek response send kiya hai, iss liye hume .then() me iss ko check karna zarori hai.

// Error/Request_Reject tab hi hogi jab browser request karhi nhi paya hai.

// fetch uses an special queue known as PriorityQueue/MicroTaskQueue, which is faster than task queue
// that setTimeout() and other asyncronous function uses.
// https://www.reddit.com/user/Piyush255/comments/1dnb4gc/asyncronous_function_and_fetch_in_javascript/


