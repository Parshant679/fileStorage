const express = require("express");
const app = new express();
const cors = require('cors');
const file = require("./routes/fileRoute");
app.use(express.json());
app.use(cors());
app.use("/api", file);
app.get("/", (req, res) => {
  res.json({ msg: "file storage server" });
});
app.listen(8080, () => {
  console.log("server running at 8080");
});
