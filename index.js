var express = require('express'); // Tao ung dung Web
var app = express(); // Tao ung dung Express
var http = require('http').Server(app);
var port = process.env.PORT || 3005;

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

http.listen(port, function() {
    console.log('VoIP web app is running at port: 3005!')
})