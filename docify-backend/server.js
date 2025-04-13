const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log("Database is connected")
})
.catch(function(err){
    console.log("Connection failed", err)
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/cards', require('./routes/cardRoutes'));
app.use('/api/files', require('./routes/uploadRoutes'));
app.use("/api/ai", require('./routes/aiRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("Server is running on port", `${PORT}`);
});