var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

/*
var logger = function(req,res,next){
  console.log("Logging...");
  next();
}
app.use(logger);
*/

/*
var person = {
  name:"Aman",
  age:"23"
};
*/


// Veiw Engine:
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Path
app.use(express.static(path.join(__dirname,"public")));

var users = [
  {
    name: "Aman",
    email: "xyz@gmail.com"
  },
  {
    name: "Lucky",
    email: "abc@gmail.com"
  }
];

// Attach Routes
app.get("/", function(req, res) {
  //res.send("Hello World!"+JSON.stringify(person));
  //res.send("Hello World!");


    res.render("index",{
      title:"Customers",
      users:users
    });
});




// Start a server at port 3000
app.listen(3000, function() {
  console.log("Server Started...");
});
