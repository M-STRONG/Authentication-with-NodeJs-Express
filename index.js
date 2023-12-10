const express = require("express")

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("it's working  ues  /posts/public")
});
app.use('/auth', require("./routes/auth"))
app.use('/posts', require("./routes/posts"))

app.listen((5000), () => {
    console.log("Listening on port 5000")
})
