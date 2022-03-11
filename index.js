const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Home Page';
  res.render('pages/index', {title:title});
});

app.get('/cannoli', (req, res) => {
  var title = 'Cannoli Recipe';
  res.render('pages/cannoli', {title:title});
});

app.get('/creme-brulee', (req, res) => {
  var title = 'Creme Brulee Recipe';
  res.render('pages/creme-brulee', {title:title});
});

app.get('/tiramisu', (req, res) => {
  var title = 'Tiramisu Recipe';
  res.render('pages/tiramisu', {title:title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
