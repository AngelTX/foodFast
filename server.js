'use-strict';

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
var cors = require('cors');
var app = express();

// For development use only 'CORS'
app.use(cors())


// URL for quering for food results when passed the fetchBody object.
const APIURL = 'https://api.nutritionix.com/v1_1/search';


app.listen(process.env.PORT || 3001, () => {
  console.log('server.js working on port 3001')
});

//Object that needs to be passed as a body to the APIURL for search for food based on params set by user input.
var fetchBody = {
  "appId":"0b4e5619",
  "appKey":"223dec7705dcadbdfd9fdbc9f173c111",
  "fields":["item_name","brand_name","nf_calories","images_front_full_url", "upc"],
  "limit":3,
  "sort":{
    "field":"_score",
    "order":"desc"
  },
  "query": '',
  "offset":0,
  "filters":{
    "item_type":1,
    "nf_calories":{
      "from":'',
      "to":''
    }
  }
};

//When this endpoint is called, produces results for breakfast queries
app.get('/:goal/:category', (req, res) => {

  var avgCal = req.params.goal / 3;
  var calRange = [avgCal-50, avgCal + 50];

  fetchBody.filters.nf_calories.from = calRange[0];
  fetchBody.filters.nf_calories.to = calRange[1];
  fetchBody.query = req.params.category;

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
