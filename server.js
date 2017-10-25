'use-strict';

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
var cors = require('cors');
var app = express();

app.use(cors())

const URL = 'https://api.nutritionix.com/v1_1/search';


var calRange1 = 300;
var calRange2 = 400;

//Keys for the API
const APPID = "f6c1ec63",
      APPKEY = "75d1892186aa45da19a882eb81ba37ba";

app.listen(process.env.PORT || 3001, () => {
  console.log('server.js working on port 3001')
});

var fetchBody = JSON.stringify({
  "appId":"f6c1ec63",
  "appKey":"75d1892186aa45da19a882eb81ba37ba",
  "fields":["item_name","brand_name","nf_calories","images_front_full_url", "upc"],
  "sort":{
    "field":"_score",
    "order":"desc"
  },
  "query": "breakfast",
  "offset":0,
  "limit":3,
  "filters":{
    "item_type":1,
    "nf_calories":{
      "from":500,
      "to":600
    }
  }
});

app.get('/menu', (req, res) => {

  fetch('https://api.nutritionix.com/v1_1/search', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: fetchBody
  }).then(results => {
    return results.json();
  })
  .then(data => {
    // console.log(data);
    // console.log(data.hits);
    // console.log(data.hits[0]);
    console.log(data.hits[2].fields);
    res.send(data);
  })
});
