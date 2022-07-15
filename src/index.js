const express=require("express")
const start=require("./puppet")
var cors = require('cors')
var app = express()
 
app.use(cors())
 

app.use(express.json())


app.post("/jobs", async(req,res)=>{
      try {
          const data=await start()
          res.status(201).send(data)
      } 
      catch (err) {
          res.send({error: err.message})
      }
})

app.listen(8500, async()=>{
    try {
        console.log("listening on port 8500")
    } 
    catch (err) {
        console.log(err) 
    }
})