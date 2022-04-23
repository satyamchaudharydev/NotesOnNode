const express = require("express");
const api = require("./src/api");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", api);
app.get("/", (req, res) => {
  res.send("<h1>Hello from NotesOnNode</h1>");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
