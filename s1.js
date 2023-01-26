const express = require("express");
const request = require("request");
const axios = require("axios");
const app = express();
const port = 5372;
const registry = process.env.REGISTRY || 'http://localhost:8080'
const address = process.env.ADDRESS || 'http://localhost'
let otherSErver;


app.use(express.json());
axios.post(registry, {
  serveur : address.port
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});



app.get('/', (req, res)=>{
  res.status(200).json({
      status: 200,
      message:'ping'
  })

axios.get(registry)

  setTimeout(function(){
      axios.get('http://localhost:4567/')
      .then(response => {
          console.log(response.data)
      })
      .catch(error =>{
          console.log(error);
      })
  },500)
})




app.listen(port, () => {
  console.log("exemple")
  axios.get('http://localhost:4567/')
  .then(response =>{
      console.log(response.data)
  })
})


app.listen(port, () => {
  console.log('Exemple Ok')
})