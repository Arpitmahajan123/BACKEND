import express from "express"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "30mb",
}));

app.use(express.urlencoded({
    extended: true,
    limit: "30mb"
}));

// This For Public Assets Like Image, Favicon, Some Files Agar Mere hi Server Par Store Rakhna Chahta Hu Isliye.

app.use(express.static("public"));

// Basically User Ke Cookies Par CRUD Operation Perform Karne ke liye.
app.use(cookieParser())







export {app};






















