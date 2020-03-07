const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.get('/hello', (req, res) => {
  const name = 'test';
  const cities = ['bcn', 'mr', 'mx'];
  res.render('index', { nameT: name, cities });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
