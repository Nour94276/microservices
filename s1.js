const express = require("express");
const request = require("request");
const axios = require("axios");
const app = express();
const port = 5372;


app.get('/', (req, res)=>{
  res.status(200).json({
      status: 200,
      message:'ping'
  })

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


axios.post('http://localhost:8083/', {
  port: 4567
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