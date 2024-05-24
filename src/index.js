// Set up nodeJS server with express

const express = require('express')
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const { log } = require('console');
const app = express()
const port = 3000
const route = require('./Routes/index');

const db = require('./config/db/index');

// Connect to DB
db.connect();

// Middleware for post method
app.use(express.urlencoded(
    {
        extended: true

    }
))

// Middleware for json
app.use(express.json()) // fetch, axios, ajax, jquery

// Static file
app.use(express.static(path.join(__dirname, 'public')))

// Template engine
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));
// console.log(path.join(__dirname, 'resource/views'));

// HTTP logger
// app.use(morgan('combined'))


// Route init
route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
