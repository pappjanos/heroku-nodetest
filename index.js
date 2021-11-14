const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("asdf");
});

app.listen(3333, () => console.log("server started"));
