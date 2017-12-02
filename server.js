'use-strict';

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
var cors = require('cors');
var app = express();

// For development use only 'CORS'
app.use(cors())


// Global Variables. Should not be mutated/changed in any way.
const APIURL = 'https://api.nutritionix.com/v1_1/search',
      APPID = "f6c1ec63",
      APPKEY = "75d1892186aa45da19a882eb81ba37ba";

// No longer required: 'minCalValue' & 'maxCalValue', may delete
var minCalValue = 300;
var maxCalValue = 500;

app.listen(process.env.PORT || 3001, () => {
  console.log('server.js working on port 3001')
});

var fetchBody = {
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
};

app.get('/menu/:goal', (req, res) => {

  var avgCal = req.params.goal / 3;
  var calRange = [avgCal-50, avgCal + 50];

  fetchBody.filters.nf_calories.from = calRange[0];
  fetchBody.filters.nf_calories.to = calRange[1];

  fetch(APIURL, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fetchBody)
  })
  .then(results => {
    if (results.ok) {
      console.log(`Response Happened: ${results.ok}`)
      return results.json();
    } else {
      throw new Error('Network response failed');
    }
  })
  .then(data => {
    console.log(data.hits[2].fields);
    res.send(data);
  })
  .catch(err => {
    console.log('Error', err)
  })
});
