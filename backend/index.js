import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send(`Welcome to MERN Stack Application`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("MongoDB Connected Successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });