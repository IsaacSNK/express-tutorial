var express = require('express');
const cors = require("cors")
var express = require('express');
const { DB } = require('./infrastructure/DB');
const e = require('express');
 
var app = express()
app.use(express.json())
app.use(cors());

app.get('/swpeople', function (req, res) {
   const { name } = req.query;
   if (name) {
      const filteredData = DB.filter(element => {
         return element.name.indexOf(name) !== -1;
      });
      res.send({
         results: filteredData
      });
   } else {
      res.send({
         results: DB
      });
   }
})

app.post('/login', function (req, res) {
   const { username, password } = req.body;
   console.log(username);
   console.log(password);
   res.send('welcome, ' + req.body.username)
})
 
var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})