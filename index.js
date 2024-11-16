const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Define a GET route
app.get("/", (req, res) => { // Fix: Correct parameter order
    res.send("Hello World");
});

// Start the server
app.listen(port, () => {
    console.log('Example app listening on port ${port}');
});