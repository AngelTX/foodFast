'use-strict';

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
var cors = require('cors');
var app = express();

app.use(cors())

//Global Variables. Should not be mutated/changed in any way.
const APIURL = 'https://api.nutritionix.com/v1_1/search',
      APPID = "f6c1ec63",
      APPKEY = "75d1892186aa45da19a882eb81ba37ba";


var minCalValue = 300;
var maxCalValue = 500;

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
      "from":minCalValue,
      "to":maxCalValue
    }
  }
});

app.post('/setGoal'), (req, res) => {

}

app.get('/menu', (req, res) => {

  fetch(APIURL, {
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
