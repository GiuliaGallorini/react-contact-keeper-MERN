# react-contact-keeper-MERN

## My Notes

MERN stack - MongoDB, Express, React, Node.js.
You will build your own custom API with Node-Express for the back-end and MongoDB for the database.<br><br>
Create the package.json:<br>

```
$ npm init -y
```

Install the dependencies you will need:<br>

```
$ npm i express bcryptjs jsonwebtoken config express-validator mongoose
```

Then a couple of dev dependencies:<br>

```
$ npm i -D nodemon concurrently
```

Concurrently allows you to run the backend and the frontend React server at the same time.<br>

To run the server:<br>

```
$ npm run server
```

### MongoDB

It is a free and open-source cross-platform document-oriented database program.<br>
It is a NoSQL database, a non-relational database that stores data in collections. NoSQL databases are increasingly used in big data and real-time web applications.<br>
MongoDB supports a rich QL (query language) to support read and write operations (CRUD) as well.<br>
It stores data in flexible, JSON-like (it is JavaScript-like, it looks like JSON), meaning fields can vary from document to document and over the time the data structure can change.<br>
It is organised in: database > collections > documents (BSON) > fields.
COLLECTIONS are analogous to tables in relational databases.<br>
DOCUMENTS are key-value objects: a data structure composed of fields, key-value pairs, similar to JSON objects (the values of fields may include other documents, arrays, and arrays of documents).<br>
For each new FIELD, you have to specify the data type that values must have for that key.<br>
The most useful data types used in Mongo documents are: Double, String, Date, Boolean, Object, Array, ObjectID, null.<br>
ObjectID is a MongoDB type used to identify documents in a collection uniquely. MongoDB will create them automatically.<br>
Advantages: 1. Documents (i.e. objects) correspond to native data types in many programming languages; 2. Embedded documents and arrays reduce need for expensive joins; 3. Dynamic schema supports fluent polymorphism.<br>

## HTTP requests

GET - When you fetch, get data<br>
POST - When you submit something to the server, ex. filling a registration form<br>
PUT - Update something that is already on the server<br>
DELETE - When you delete something from the server<br>

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
