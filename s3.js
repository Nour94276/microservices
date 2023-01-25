const express = require("express");
const axios = require("axios")
const app = express();
const port = 8083;


app.post('/', (req, res)=>{
    console.log(res.data); //console.log(req)
    
 })

 app.listen(port, () => {
   
    app.post('/', (req, res)=>{
    console.log(res.data);//console.log(req)
    
    })
  })