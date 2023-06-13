/*
    title: server.js file.
    desc: a main file for tset the news api backend.
    date: 27 - 5 - 2023.

*/
const express = require("express"); 
const cors = require("cors"); 
const { default: axios } = require("axios");
const app = express(); 
app.use(cors()); 
app.get('/api', async (req , res) => {
    console.log(req._parsedUrl.query);
    let url = "https://newsapi.org/v2/everything?" + req._parsedUrl.query;
    let r = await axios(url);
    let result = r.data;
    res.json(result);
});
app.listen(4000); 
