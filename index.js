const express = require('express');
const requestLogger = require('./requestLogger');

const app = express();
const port = 3000;

app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
