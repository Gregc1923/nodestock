//Stock Market Portfolio app By Greg Chappelow

const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');


const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main.handlebars"}));
app.set('view engine', 'handlebars');

// Set handlebar routes
app.get('/', function (req, res) {
	res.render('home', {
		stuff:  "This is stuff..."
	});
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT))
