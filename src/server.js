const express = require("express");
const cors = require("cors");
const rota = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(rota);


app.get("/home", (req, res) => {
    return res.json("up")
});

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
    })
