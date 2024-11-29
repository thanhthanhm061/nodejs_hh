const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')))
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs',  
  handlebars.engine({
    extname:'.hbs'
  }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); 

// Route
app.get('/', (req, res) => {
    res.render('home'); 
});
app.get('/new', (req, res) => {
  res.render('new'); 
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});