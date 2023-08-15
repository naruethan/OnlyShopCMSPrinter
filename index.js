const express = require("express");

const app = express();
const PORT = 3031 || 8080;

require("./routes/api")(app);

//app.get("/", (req, res) => res.send("Hellosssssss World"));

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

module.exports = app;
