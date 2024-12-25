const express = require("express");
const meditationsRoutes = require("./adapters/routes/meditationsRoutes");
const songsRoutes = require("./adapters/routes/songsRoutes");
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/meditations", meditationsRoutes);
app.use("/songs", songsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 