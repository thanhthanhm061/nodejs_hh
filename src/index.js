const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

const route = require('./routes')
const db = require('./config/db')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // Để parse dữ liệu từ form
app.use(bodyParser.json());

//Connect to db
db.connect();

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

//Routes init
route(app)

// Start the server
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
