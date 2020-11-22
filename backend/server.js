'use strict'

const express = require("express");
var bodyParser = require('body-parser');
let axios = require('axios');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set("port",process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

//database
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '162.241.252.221',
    user:'bjotxymy_tito',
    password:'kbh0W)~xKDdD',
    database: 'bjotxymy_musicpagecreator'
})

/* Songs */
app.get('/video/:id', function(req, res) {
  connection.query(`SELECT * FROM youtube_videos WHERE id = ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    console.log(results)
    res.send(results);
  });
});

connection.connect();

app.post('/video', function(req, res) {
  let youtubeLink = req.body.youtubeLink;
  if (youtubeLink === '') {
    res.send('Please Set YouTube Link');
  }
  else {
    let youtubeID = youtubeLink.split('?v=')[1];
    let color = req.body.color;
  
    connection.query(`INSERT INTO youtube_videos (youtubeId, color) VALUES ('${youtubeID}', '${color}')`, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  }
});