const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from my app');
});

app.listen(port, () => {
    debug(`Development server is running on ${chalk.green(port)}`);
});