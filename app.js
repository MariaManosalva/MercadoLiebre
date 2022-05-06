const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Levantando servidor ${port}`)
})

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/views/index.html");
});

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/views/index.html");
});