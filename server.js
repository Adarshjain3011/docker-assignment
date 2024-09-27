const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require("./src/route/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Use the user routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected');
        // Start the server only after successful DB connection
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));

app.get("/",(req,res)=>{

    res.send("hellow ji");
})

