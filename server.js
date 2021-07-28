import { DB } from "./infrastructure/DB.js";
import cors from "cors"
import express from "express";
import { searchRecipes } from "./services/RecipeService.js";

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

app.get("/recipes", (req, res) => {
   const result = searchRecipes(req.query.random === "true");
   res.send(result);	
});

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