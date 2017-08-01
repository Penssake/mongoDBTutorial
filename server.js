'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res){
  console.log('GET request');
  res.send({name: 'Christina'});
});

app.listen(process.env.port || 5000, function(){
  console.log('now listening for requests');
});
