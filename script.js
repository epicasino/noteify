// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Makes 'public' folder for end-user in express
app.use(express.static(path.join(__dirname, "public")));

// Uses /controllers/index.js for routing
app.use(require("./controllers"));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
