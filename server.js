const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", async(req, res) => {
    await res.send("My name is Teniola Fatunmbi");
    return res;
});


app.listen((PORT), () => console.log(`Server is running on port ${PORT}`));
