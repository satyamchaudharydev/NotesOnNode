const express = require("express");
const api = require("./data");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/api", api);
app.get("/", (req, res) => {
  res.send("<h1>Hello from codedamn</h1>");
});
app.get("/books", (req, res) => {
  res.send(api);
});
app.get("/books/:id", (req, res) => {
  console.log("fetching");
  rs.send("hj");
  // res.send(req.body.params,"hi")
});
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
