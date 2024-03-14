const express = require('express');
const app = express();
const port = 9292;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Serve the index.html file
app.get('/', (_req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});