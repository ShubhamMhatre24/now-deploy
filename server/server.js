require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const enquiryrouter = require('./App/routes/web/EnquiryRoutes');

const app = express();

app.use(express.json());

app.use(cors({
  origin: "",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use("/api/secondlife/", enquiryrouter);
app.use('/upload', express.static('upload'));

// First DB
mongoose.connect(process.env.DBURL)
.then(() => {
    console.log("✅ Connected to DB: uploadstorage");

    // Second DB
    const loginConnection = mongoose.createConnection(process.env.LOGINDB);

    loginConnection.on("connected", () => {
        console.log("✅ Connected to DB: loginstorage");

        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server running on port ${process.env.PORT}`);
        });
    });

    loginConnection.on("error", (err) => {
        console.error("❌ Error connecting to login DB:", err);
    });

})
.catch((err) => {
    console.error("❌ Error connecting to main database:", err);
});