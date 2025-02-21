const express = require("express");
const cors = require("cors");
const bodyParser = require("express.json");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/bfhl", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
