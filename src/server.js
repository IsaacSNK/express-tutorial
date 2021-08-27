import { DB } from "./infrastructure/DB.js";
import cors from "cors"
import express from "express";

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
 
var server = app.listen(81, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})