const express = require("express");
const path = require("path")
const {mongo_conn} = require("./mongoose_conn.js");
const url_route = require("./routes/url.js");
const staticroute = require("./routes/staticRoute.js");
const app = express();
const PORT = 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//middleware - request logger

//setting paths for ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
//mongoDb conn
mongo_conn("mongodb://localhost:27017/url_shortener")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

//Home page
app.use("/", staticroute);

app.use("/url", url_route);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
