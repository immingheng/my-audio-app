 /*
My first attempt to code in Node.js with Express and body-parser
*/

// Instantiation of app object in express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

// Seggregate front and backend port to be 3000 and 8080 accordingly.
// If PORT is defined in environment then use that, else default = 8080
const port = process.env.PORT || 8080;

// Cross Origin Resource Sharing (CORS) configuration 
var corsOptions = {
    origin: "http://localhost:3000"
}

// Initialization of application to use additional middlewares(cors, body-parser)
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Database configuration(s)
const database = require('./app/models');

// Using sequelize mySQL node.js ORM tool to carry out database related actions
database.sequelize.sync({force:true}).then(()=>{
    console.log('Drop and resync database with {force:true}')
});

// Can either send a simple message or render an entire HTML page
app.get('/', function (req, res){
    res.json({message: 'Welcome to my-audio-app backend server.'});
})

// Routes
require('./app/routes/auth.routes');
require('./app/routes/rights.routes');


app.listen(port, ()=> {
    console.log(`Backend application started and is listening on port ${port}.`);
})
