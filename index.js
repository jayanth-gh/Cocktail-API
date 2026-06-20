require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors')
const cocktailRoutes = require("./routes/cocktailRoutes");
const authRoutes = require("./routes/authRoutes");

const cocktailRoutes = require("./routes/cocktailroutes");
const authRoutes = require("./routes/authroutes");

const passport = require("./config/passport");

const app = express();

connectDB();

app.use(express.json());
app.use(passport.initialize());
app.use(cors())
app.use("/uploads", express.static("uploads"));

app.use("/api/", cocktailRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Cocktail API is running...");
});



app.listen(3002, () => {
    console.log(`Server started`);
});
