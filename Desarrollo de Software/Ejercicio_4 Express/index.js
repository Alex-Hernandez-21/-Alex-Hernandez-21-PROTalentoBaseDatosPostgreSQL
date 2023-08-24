const express = require('express');
const server = express();
const port = 3003

// punto 1
server.get("/api", (req, res) => {
    res.status(200).json("Hello World");
});

// punto 2



server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log("hello")