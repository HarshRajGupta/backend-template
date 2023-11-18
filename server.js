const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const connectDB = require("./database/connectDB");
const apiRouter = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        credentials: true,
        origin: (process.env.CLIENT_URL || "http://localhost:3000"),
    })
);

app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.status(200).send("Server is running");
})

const start = async () => {
    try {
        await connectDB();
        const port = process.env.PORT || 4000;
        app.listen(port, () => {
            console.log(`DEBUG: Server listening on http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();