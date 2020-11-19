const express=require("express")
const CORS = require('cors')
const bodyParser = require('body-parser')
const path = require("path")
const app=express()
require('./db/mongoose')
require("dotenv").config();

const userrouter=require("./routers/user")
const roomrouter=require("./routers/room")

const port = 5000 || process.env.PORT

app.use(CORS());
app.use(bodyParser.json())

app.use(userrouter)
app.use(roomrouter)

app.use(express.static(path.join(__dirname, "Frontend", "build")))

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static("Frontend/build"));
// }

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "build", "index.html"));
});
app.listen(port,()=>{
  console.log('server is up and running!')
})