const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000;

console.log(process.env.PORT)
app.get("/", (req,res) => {
  console.log("");
})


app.listen(PORT,(req,res) =>{
  console.log(`${PORT} is running`)
})