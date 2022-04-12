const express = require("express")
const app = express()
const axios = require("axios")
const { response } = require("express")
const port = 3000
const data = require('./data.json')


app.get("/game-of-thrones/json", (req, res) => { 
    res.json({
        data
    })
})

app.get('/game-of-thrones/url', (req, res)=>{
    axios.get("https://thronesapi.com/api/v2/Characters")
      .then(response => {
          res.json({
              data: response.data
          })
      });

})

app.get('/pokemons', (req, res)=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then(response => {
          res.json({
              data: response.data
          })
      });
      console.log('pokemons data');

})



app.listen(port, () => {
  console.log(`App running on port ${port}`)
})