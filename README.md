# nodejs and express using create application
Building Web Applications with Node.js and Express

# Gratting Started

### Introduction
- Overview
Building web apps
- From the beginning
- Node and NPM
- Node versions
- Templating engines
- NPM scripts
- Routing
- Databases
 - Mongo
 - SQL
- Consuming APIs 

# What is Nodejs?
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.

- Server side JavaScript
- Cross Platform
- JavaScript is Awesome!
- Open Source

# What is Expressjs?
Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

- Nodejs +
- NPM +
- Express

# Installing Node
Download nodejs update version below website link
https://nodejs.org/en/download/

Then, Open your computer terminal & type
```
node
```

Check Nodejs version
```
node --version
```

# Dealing with Node Versions
One os multiple nodejs version using
- https://github.com/coreybutler/nvm-windows
- https://github.com/nvm-sh/nvm

# Picking an IDE
- Sublime Text "https://www.sublimetext.com/3"
- Web Storm "https://www.jetbrains.com/webstorm/"
- VS Code "https://code.visualstudio.com/"

I Personally Recommend You Use VS Code

# Working with NPM
Goto your desktop and create a "application" Folder, Now you computer terminal open here.
```
npm init
```
Enter key all option and create a package.json file.

then install express using npm

```
npm install express
```

# Summary
- What is Node.js?
- Install Node
- Versioning with NVM
- So many IDEs
- NPM as a Package Manager

# The First Page
### Introduction
Overview
- index.html
 - Set up Express
 - Running Express
 - Logging
 - Serving HTML
 - Serving static files
   - HTML
   - CSS
   - Bootstrap
   - jQuery

# Setting Up Express
Create a app.js file in your application and write app.js file
```
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from my app');
});

app.listen(port, () => {
    console.log(`Development server is running on ${port}`);
});
```

Run you first code - Open terminal
```
node app.js
```

# Running Express
```
node app.js
```

# Debugging Options
```
npm install chalk@4.1.1
npm install debug@4.3.1
npm install morgan
```

Open app.js file
```
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from my app');
});

app.listen(port, () => {
    debug(`Development server is running on ${chalk.green(port)}`);
});
```

Run:
```
DEBUG=* node app.js 
DEBUG=app node app.js
```

# Serving Index.html
Create a file called index.html
* public
    * index.html

open index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express app</title>
</head>
<body>
    <h2>Welcome my express application</h2>
</body>
</html>
```

Now, open app.js file
```
const path = require('path');

app.use(express.static(path.join(__dirname, '/public/')));

```

