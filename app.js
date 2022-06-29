const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from my app');
});

app.listen(port, () => {
    console.log(`Development server is running on ${port}`);
});