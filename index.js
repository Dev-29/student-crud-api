const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// import routes
const studentRoutes = require('./routes/students');

app.use('/students', studentRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Routes
app.get('/', (req, res) => {
    res.json({ "message": "homepage!" });
});

app.get('/students', (req, res) => {
    res.json({ "message": "students" });
});

// Add a simple 404 not found path
app.use((req, res) => {
    res.status(404).json({ "message": "404 Not Found" });
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
