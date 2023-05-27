/*
    title: server.js file.
    desc: a main file for tset the news api backend.
    date: 27 - 5 - 2023.

*/
const express = require("express");
const app = express();
const port = 5000;
const axios = require("axios");
// routes
app.get("/api", async (req, res) => {
  console.log(req._parsedUrl.query);
  let url =  "https://newsapi.org/v2/everything?"+req._parsedUrl.query
  let r = await axios(url);
  let a = r.data;
  res.json(a);
});
// app listen
app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
