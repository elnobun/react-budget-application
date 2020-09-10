const express = require("express");
const path = require("path");

// new instance of express
const app = express();

// register port
const port = process.env.PORT || 3000;

// decare public path
const publicPath = path.join(__dirname, "..", "public");

// use express to serve assets from the public directory
app.use(express.static(publicPath));

// connect the routes
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// listen on port 3000
app.listen(port, () => {
  console.log("Server is running!");
});
