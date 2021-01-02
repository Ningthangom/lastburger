const express = require("express");

const PORT = process.env.PORT ||  3003;

const app = express();

//serves static files
app.use(express.static(__dirname + "/public"));

//parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var routes = require("./controllers/burgerController.js");
app.use(routes);

//listen
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});