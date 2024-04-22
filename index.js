let express = require('express');
let app = express();

let mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Import routes
let apiRoutes = require("./api-routes");

// Using express.urlencoded middleware
app.use(express.urlencoded({
    extended: true
}))

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://127.0.0.1:27017/restdemo');

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
