import img1 from '../../../src/assets/Images/3.PNG'
import img2 from '../../../src/assets/Images/4.PNG'
import img3 from '../../../src/assets/Images/5.PNG'
import img4 from '../../../src/assets/Images/6.PNG'


const blogsData = [
    {
        id: 1,
        img: img1,
        question: "What are the difference between SQL and NoSQL ?",
        answer: "SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems, each designed to handle data in a different way. Here are the key differences between SQL and NoSQL databases:SQL: SQL databases are relational databases, which means they use a structured schema to define the data's structure. Data is organized into tables with rows and columns, and these tables are related to each other using keys.NoSQL: NoSQL databases are non- relational databases, and they can store and manage unstructured or semi - structured data.Data can be stored in various ways, including key - value pairs, document - oriented, column - oriented, or graph - based models.SQL: SQL databases have a fixed schema, which means the structure of the data(tables and columns) must be defined before data can be inserted.Any changes to the schema can be complex and time - consuming.NoSQL: NoSQL databases typically have a dynamic or schema - less approach."




    },
    {
        id: 2,
        img: img2,
        question: "What is JWT, and how does it work ?",
        answer: "JWT stands for JSON Web Token. It is a compact, self-contained way to represent information between two parties securely as a JSON object. JWTs are commonly used for authentication and authorization in web applications and APIs. They are designed to be easily transmitted between different systems and are often used for ensuring the integrity and authenticity of data.Here's how JWTs work and their components:Components of a JWT:Header: The header typically consists of two parts: the type of token(JWT) and the signing algorithm being used(e.g., HMAC SHA256 or RSA).It is Base64Url encoded to form the first part of the JWT.Payload: The payload contains the claims.Claims are statements about an entity(typically, the user) and additional data.There are three types of claims: registered, public, and private claims.The payload is also Base64Url encoded to form the second part of the JWT.Signature: To create the signature part, you take the encoded header, the encoded payload, a secret, and the algorithm specified in the header, and sign that.Creation of a JWT:When a user logs in or a new session is established, a JWT is created on the server.The server includes user- specific information(claims) in the payload, such as the user's ID or role.The server then signs the JWT using a secret key or private key, depending on the chosen algorithm.",
    },
    {
        id: 3,
        img: img3,
        question: "What is the difference between javascript and NodeJS ?",
        answer: "JavaScript and Node.js are related but serve different purposes and have distinct characteristics. Here's a comparison of JavaScript and Node.js:Definition:JavaScript: JavaScript is a programming language that is primarily used for web development.It is executed in web browsers to add interactivity and functionality to websites.Node.js: Node.js is a runtime environment that allows you to execute JavaScript code on the server- side.It is not a programming language itself but rather a runtime built on the V8 JavaScript engine.Environment:JavaScript: JavaScript is executed in web browsers.It is primarily a client - side language, meaning it runs in the browser of the user.Node.js: Node.js is a server - side runtime environment.It allows you to run JavaScript on the server, making it possible to build server - side applications, APIs, and networked applications.Use Cases:JavaScript: JavaScript is used for front - end web development.It is responsible for creating interactive user interfaces, handling user events, and making asynchronous requests to servers.Node.js: Node.js is used for server - side development.It is commonly used to build web servers, RESTful APIs, real - time applications(e.g., chat applications), and various backend services.",
    },
    {
        id: 4,
        img: img4,
        question: "How does NodeJS handle multiple requests at the same time ?",
        answer: "Node.js is designed to handle multiple requests at the same time efficiently due to its non-blocking, event-driven architecture. Here's how Node.js achieves this:Single- Threaded and Event - Driven:Node.js operates on a single - threaded event loop.This means that there is a single main thread responsible for executing JavaScript code.Instead of creating a new thread or process for each incoming request, Node.js relies on asynchronous I / O and event - driven programming to manage multiple concurrent requests efficiently.Non - Blocking I / O:Node.js uses non - blocking I / O operations for tasks like reading and writing to files, making network requests, and handling database queries.When Node.js encounters an I / O operation, it doesn't wait for the operation to complete; instead, it delegates the operation to the underlying system and continues executing other code. This allows Node.js to handle other requests while waiting for I/O operations to finish Callbacks:Node.js uses callbacks extensively to handle asynchronous operations.When an I / O operation is completed, a callback function is invoked to process the result.Callbacks allow Node.js to continue executing other code while waiting for I / O operations to complete, effectively enabling it to handle multiple requests concurrently.Event Loop:The event loop is at the core of Node.js's concurrency model. It constantly checks the message queue for pending events and executes associated callback functions when events occur. Events can include I/O completions, timers reaching their specified time, and user-defined events. The event loop ensures that each event is processed as soon as it's ready, making Node.js highly responsive and efficient.",
    }
]

export default blogsData;