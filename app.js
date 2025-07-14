const express = require('express')
const app = express()
const port = 3000

const data = require('./colors.json');

const path = require('path');
app.use('/site', express.static(path.join(__dirname, 'public')));

console.log(__dirname);

app.get('/colors', (req, res) => {
  res.json(data);
});


app.listen(port, () => {
  console.log(`App => http://localhost:${port}`)
})
