// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);

// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
})

// tells our server to use the "/static" folder for static content (html/css/js)
app.use(express.static(__dirname + "/static"));

// sets the location where express will look for the ejs views (using a view/templating engine to generate HTML)
app.set('views', __dirname + '/views');
// sets the view engine itself so that express knows we are using ejs as opposed to other templating engines like jade
app.set('view engine', 'ejs');

app.get('/users', function(request, response){
  // hard-coded user data as opposed to getting list of users from database (for the sake of demonstrating how to render ejs view)
  var users_array=[
    {name: "Michael", email: "michael@codingdojo.com"},
    {name: "Jay", email: "jay@codingdojo.com"},
    {name: "Brendan", email: "brendan@codingdojo.com"},
    {name: "Andrew", email: "andrew@codingdojo.com"}
  ];
  response.render('users', {users: users_array});
})

// tell the express app to listen on port 8000, always put this at the end of your server.js
app.listen(8000, function() {
  console.log("listening on port 8000");
})