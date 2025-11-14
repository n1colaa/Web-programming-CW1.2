import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
