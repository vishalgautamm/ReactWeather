var express = require('express');

var PORT = 3000;

var app = express();

app.use(express.static('public'));

//Starts the server

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});
