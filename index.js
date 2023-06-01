const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hellosoo World');
});

app.listen(3000)