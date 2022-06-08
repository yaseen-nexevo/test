const express = require("express");


const cors = require('cors')
const app = express();

app.use(cors());


app.use("/", function(req,res){
res.send("Working")
})

app.listen(80, () => {
  console.log(`server is running on 80`);
});