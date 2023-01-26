const express = require("express");
const axios = require("axios")
const app = express();
const port = parseInt(process.env.PORT) || 8083
const registry = process.env.REGISTRY || 'http://localhost:8083'
const address = process.env.ADDRESS || 'http://localhost'

app.use(express.json());
app.post('/', (req, res)=>{
    console.log(req.body); //console.log(req)
    const otherSErver = req.body;
    app.get('/',(req,res)=>{
        res = otherSErver;
    })
 })

 app.listen(port, () => {

  })