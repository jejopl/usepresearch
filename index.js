const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3500

// Register Handlebars view engine
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
// Use Handlebars view engine
app.set('view engine', '.hbs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:tagId', function(req, res) {
    let search = req.params.tagId
    search = search.replace(/\-/g, " ");
    res.render('search', {
        search: search
    })
  });

app.listen(port, () => {
  console.log(`usepresearch is running → PORT ${port}`);
});