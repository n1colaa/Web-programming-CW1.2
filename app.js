const express = require("express");
const app = express();
const port = 3000;


app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/new-table', (req, res) => {
    res.render('new-table'); 
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});


