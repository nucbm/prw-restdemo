let express = require('express');
let mongoose = require('mongoose');
let app = express();

// Import routes
let apiRoutes = require("./api-routes");

// Using express.urlencoded middleware
app.use(express.urlencoded({
    extended: true
}))

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/restdemo', { useNewUrlParser: true});

var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello !'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestDemo on port " + port);
});