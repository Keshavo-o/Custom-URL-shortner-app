const express = require("express");
const {mongo_conn} = require("./mongoose_conn.js");
const url_route = require("./routes/url.js");
const app = express();
const PORT = 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//middleware - request logger


//mongoDb conn
mongo_conn("mongodb://localhost:27017/url_shortener")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

//Home page
app.get("/", (req, res) => {
  res.send("Welcome to the URL Shortener API");
});

app.use("/url", url_route);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});