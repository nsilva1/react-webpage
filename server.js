const express = require('express');

const port = process.env.PORT || 5500;

const app = express();

app.get('/', (req, res) => res.send('Welcome to starlight Private School'));

app.listen(port, () => console.log(`Server running on ${port}`));
