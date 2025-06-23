

const express = require("express");
const sai = express();

sai.get("/", (req, res) => {
    res.send("Welcome to server Saikumar>>>>>>>")
})
sai.get("/user", (req, res) => {
    res.send("Welcome to User Page Saikumar....")
})

sai.get("/login", (req, res) => {
    res.send("Welcome to Login Page Saikumar!!!")
})


sai.listen(3000, () => {
    console.log("Server is started at the locahost:3000")
})