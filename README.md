# react-contact-keeper-MERN

## My Notes

**MERN stack** - MongoDB, Express, React, Node.js.<br>
You will build your own custom API with Node-Express for the back-end and MongoDB for the database. React for the front-end.<br><br>
Create the **package.json**:<br>

```
$ npm init -y
```

Install the **dependencies** you will need:<br>

```
$ npm i express bcryptjs jsonwebtoken config express-validator mongoose
```

Then a couple of **devDependencies**:<br>

```
$ npm i -D nodemon concurrently
```

To run the server:<br>

```
$ npm run server
```

To install React in a folder called "client" (this folder has its own packages for the front-end client-side, different from the files related to the back-end, ex. package.json):<br>

```
$ npx create-react-app client
```

After having installed React and set concurrently, you can run the server only once from the root:

```
$ npm run dev
```

### MongoDB

It is a free and open-source cross-platform document-oriented **database program**.<br>
It is a **NoSQL** database, a non-relational database that stores data in **collections**. NoSQL databases are increasingly used in big data and real-time web applications.<br>
MongoDB supports a rich QL (query language) to support read and write operations (CRUD) as well.<br>
It stores data in flexible, JSON-like (it is JavaScript-like, it looks like JSON), meaning fields can vary from document to document and over the time the data structure can change.<br>
It is organised in: database > collections > documents (BSON) > fields.

- **COLLECTIONS** are analogous to tables in relational databases.<br>
- **DOCUMENTS** are key-value objects: a data structure composed of fields, key-value pairs, similar to JSON objects (the values of fields may include other documents, arrays, and arrays of documents).<br>
- For each new **FIELD**, you have to specify the data type that values must have for that key.<br>
  The most useful data types used in Mongo documents are: Double, String, Date, Boolean, Object, Array, ObjectID, null.<br>
  ObjectID is a MongoDB type used to identify documents in a collection uniquely. MongoDB will create them automatically.<br>
  Advantages: 1. Documents (i.e. objects) correspond to native data types in many programming languages; 2. Embedded documents and arrays reduce need for expensive joins; 3. Dynamic schema supports fluent polymorphism.<br>

## HTTP requests

**GET** - When you fetch, get data<br>
**POST** - When you submit something to the server, ex. filling a registration form<br>
**PUT** - Update something that is already on the server<br>
**DELETE** - When you delete something from the server<br>

## EXPRESS

Web **FRAMEWORK** for Node.js, for the backend.<br>

## CONFIG

A folder with files to connect the app to the database MongoDB<br>

## EXPRESS-VALIDATOR

To validate the fields of the data inserted, ex. for a new user the field "name" and "email", so the user can register and be added to your database<br>

## BCRYPTJS

To encrypt the field "password", that will not be saved and stored as plain text, but as a long hash<br>

## JsonWebToken

JsonWebToken is a dependency that creates a special token: this token has a payload in it, and it is sent to access protected routes.<br>
JWTs are credentials, which can grant access to resources.<br>
When a user registers, or logs in, a token is generated and sent to him, to authenticate his access.
The token encoded appears like a long algorithm, composed by 3 parts:

- the HEADER, that contains the algorithm and the type<br>
- the PAYLOAD, that contains the "sub" number, the "name" and the "iat", issued at, a timestamp. The id of the user is what will be checked by the auth middleware<br>
- the SIGNATURE<br>

In the authentication route the user registers or logs in, he gets a token, and then he sends that token to access the protected route.

## CONCURRENTLY

It allows you to run the backend (PORT:5000) and the frontend React server (PORT:3000) at the same time.<br>
Without this devDependency, you should open two terminal and run twice the server, once for the back-end, once for the front-end:

```
$ npm run server
$ cd client > $ npm start
```

Instead, you create the "dev" script in package.json:

```
scripts: {
  "dev": "concurrently \"npm run server\" \"npm run client\""
}
```

So you can run the server only once from the root:

```
$ npm run dev
```

## NODEMON

???<br>

## PROXI

If you add a proxi in _client > package.json_, you have to type less when you make a request to your backend: instead of _"http://localhost:5000/api/whatever"_ only _"/api/whatever"_:

```
"proxi": "http://localhost:5000"
```

## Code & Resources

Final Code Repo:<br>

https://github.com/bradtraversy/contact-keeper

Express API Repo, with Documented Endpoints:<br>

https://github.com/bradtraversy/contact_keeper_api

Note: If you do not want to build the API, you can clone it and skip this section and the next section to continue on.<br>

MongoDB Atlas:<br>

https://www.mongodb.com/

Postman Download:<br>

https://www.getpostman.com/
