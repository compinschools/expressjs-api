const express = require("express");
const app = express()
const port = 3000
const router = require('./router')

app.use(express.json());
app.use(router);

app.get('/test', (req,res) => res.send("This is a test!"));



app.listen(port, () =>
    console.log(`Example app listening on http://localhost:${port}`)
)