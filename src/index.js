// Set up nodeJS server with express

const express = require('express')
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan')
const app = express()
const port = 3000

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
app.use(morgan('combined'))

// Render home page
app.get('/', (req, res) => {
    res.render('home')
})

// Render Search page
app.get('/search', (req, res) => {
    res.render('search')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
