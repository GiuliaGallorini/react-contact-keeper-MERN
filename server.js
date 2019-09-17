// These lines of code allow you to run the server

// You create a very basic Express server
// With Node backend technology you cannot use the 'import' syntax for importing modules, so you can use commonJS
const express = require('express');

// Initialise Express in a variable called app
const app = express();

// You create the route '/' that retrieve a JSON object, a message
app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Create a variable for the PORT: first it will look for a environment variable called PORT, during the production, or any PORT you want, ex. 5000
const PORT = process.env.PORT || 5000;

// The app object will take a listen method, you pass a PORT and take a callback and a console.log
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
