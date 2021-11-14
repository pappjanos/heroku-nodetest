const express = require("express");
const app = express();
const supabaseClient = require("@supabase/supabase-js");

const supabase = supabaseClient.createClient(
    "https://djhexoslpveyicsaepxn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjkwNDIzNywiZXhwIjoxOTUyNDgwMjM3fQ.UWq8mm8fG0lYN_Cwc7S_JXYfGQnQ_NNsXXBHltdFBC4"
);

app.get("/", (req, res) => {
    res.send("asdf");
});

app.listen(3333, () => console.log("server started"));
