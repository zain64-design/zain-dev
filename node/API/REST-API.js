// 🔷 REST:(Representational state transfer) 
// 🟡 2000 jab rest api introduce hui thi us time tak json picture mein nahi thi. initial days mein XML hi use hoti thi rest api mein. Soap api mein focus hota tha actions par wsdl file mein methods specify karte thay wo method jo client call karega action but in rest we focus on resources k front end kya resources = data access karna chahta hai . we show the same data in different way with the help of json

// 🟢 REST API are all about communication transfers the data client to server and vice versa jo json data hum server se send karte hein usko representational state hum apne table se data fetch karte hein usko aik special form mein banate hein yai special data form hamaray data ko represent karti hai for example front end data mein kuch change karta hai to backend representational state ko read kar k data base update karta hai. we use json to represent our data in the data base

// 💭 RESTful API ?
// 👉 Any REST API implemented over HTTP protocol will be composed of a URI which points to some resource on our data base.
// 👉 URI means that any URl that points any resource on the data base

// 🟦 Client-Server Architecture

// 👉 REST insists on a clear separation between the client (the frontend or app that makes the request) and the server (the backend that process it).

// 👉 The client is dumb it only handles what the user sees(UI), and the server is smart it holds and process data

//🟢 Real world Analogy:

// 👉 Client = customer sitting at the table(req food)
// 👉 Server =  Kitchen (cooks food)
// 👉 They communicate via menu or waiter (API contract) - you don't know how the chef cooks, just that your order will be fulfilled

// 🟦 Benefits:

// 👉 Frontend and Backend teams can work independently
// 👉 You can redesign your UI (React,Vue etc) without touching server.
// 👉 You can change the server tech (Node Go,etc) with out effecting the client.

// 🟢 Core principle of REST

// ✅ Resource identification requests endpoint name should be noun like (e.g., /users/1) ❌ (e.g., /getUsers/1) 

// 🟦 standard valid http method to specify action 🔷 GET (READ) 🔷 POST (CREATE) 🔷 PUT (UPDATE) 🔷 PATCH (UPDATE) 🔷 DELETE for CRUD

// 🟦 non-standard methods like LINK UNLINK

// 🟡 Hypermedia as the engine of the app state (HATEOAS) (optional but purist REST includes it)

// 🟢 Add Versioning Support : Distinct version number is added in the URL or in query parameter 🔷 in URL /v1 🔷 in query parameter  ?v=1 🔷 in header

// 🟩 Rules for API naming

// 👉 No trailing forward slash (/users/)
// 👉 hierarchical relationship using forward slash and no action ✅ (/users/transaction) ❌ (/users/GetTransaction)
// 👉 use plural names like (users, products etc)
// 👉 use hyphens to make it more readable (/all-users)

