import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send(`Welcome to MERN Stack Application`);
});

app.use("/books", booksRoute);

//middleware for handling cors errors
//Option 1: Allow all origins with Defualt of cors(*)

//Option 2: Allow custom origin
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type",
// }));



mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("MongoDB Connected Successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });