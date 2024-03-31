const express = require('express');
const path = require('path');
const logger = require("./middleware/logger");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Logger middleware
app.use(logger);

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/members', require('./routes/api/members'));

app.use('/api/flights', require('./routes/api/flights'))

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
