require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const enquiryrouter = require('./App/routes/web/EnquiryRoutes');

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use("/api/secondlife/", enquiryrouter);
app.use('/upload', express.static('upload'));

// First, connect to main DB
mongoose.connect(process.env.DBURL)
  .then(() => {
    console.log("✅ Connected to DB: uploadstorage");

    // Now connect to second DB
    //return mongoose.createConnection(process.env.LOGINDB);
  })
  .then((loginConnection) => {
    console.log("✅ Connected to DB: loginstorage");

    // Start server after both DBs are connected
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error connecting to database:", err);
  });
