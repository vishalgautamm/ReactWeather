var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.use(function (req,res,next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

//Starts the server

app.listen(port, function () {
    console.log('Express server is up on port ' + port);
});
