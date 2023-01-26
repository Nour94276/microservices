const express = require("express");
const axios = require("axios")
const app = express();
const port = parseInt(process.env.PORT) || 4567
const registry = process.env.REGISTRY || 'http://localhost:8080'
const address = process.env.ADDRESS || 'http://localhost'
let otherSErver;

axios.get(registry).then(resp => {
  console.log(resp.data);
  otherSErver = resp.data;
});
axios.post(registry, {
  serveur : address.port
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});



app.listen(port, () => {
  console.log('Exemple Ok')
})

app.get('/', (req, res)=>{
  res.status(200).json({
      status: 200,
      message:'pong'
  })

  
  setTimeout(function(){
      axios.get(address+port)
      .then(response => {
          console.log(response.data)
      })
      .catch(error =>{
          console.log(error);
      })
  },500)

})

