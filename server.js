// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/contact.html", function (request, response) {
  response.sendFile(__dirname + '/public/contact.html');
});

app.get("/find.html", function (request, response) {
  response.sendFile(__dirname + '/public/find.html');
});

app.get("/rooms.html", function (request, response) {
  response.sendFile(__dirname + '/public/rooms.html');
});

app.get("/room_high.html", function (request, response) {
  response.sendFile(__dirname + '/public/room_high.html');
});

app.get("/room_medium.html", function (request, response) {
  response.sendFile(__dirname + '/public/room_medium.html');
});

app.get("/room_poor.html", function (request, response) {
  response.sendFile(__dirname + '/public/room_poor.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
