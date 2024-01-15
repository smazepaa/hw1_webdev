const express = require('express');

const app = express();
const port = 3000;

app.get('/endpoint', (req, res) => {
    res.json({ message: "This is an endpoint for HW1" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});