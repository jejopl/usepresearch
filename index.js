const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Register Handlebars view engine
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
// Use Handlebars view engine
app.set('view engine', '.hbs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/p', (req, res) => {
    res.render('index');
  });

app.get('/p/:tagId', function(req, res) {
    let search = req.params.tagId
    res.render('search', {
        search: search
    })
  });

app.listen(3500, () => {
  console.log('usepresearch is running → PORT 3500');
});