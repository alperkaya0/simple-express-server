const express = require("express");
const app = express();
app.get("/", function(req,res) {
    res.send("<h1>Hello World</h1>");    
})
let port = 3000;
app.listen(port, function() {
    console.log(`Server started on port ${port}... please use the following link to access it http://localhost:${port} or http://127.0.0.1:${port}`);
});
