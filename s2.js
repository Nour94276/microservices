const express = require("express");
const axios = require("axios")
const app = express();
const port = 4567;

app.get('/', (req, res)=>{
  res.status(200).json({
      status: 200,
      message:'pong'
  })

  setTimeout(function(){
      axios.get('http://localhost:5372/')
      .then(response => {
          console.log(response.data)
      })
      .catch(error =>{
          console.log(error);
      })
  },500)

})


app.listen(port, () => {
  console.log('Exemple Ok')
})