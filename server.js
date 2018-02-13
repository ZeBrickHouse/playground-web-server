const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 2500;
var app  = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.');
    }
    next();
  });
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: `Abigail's Website`
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/gardens', (req, res) => {
  res.render('gardens.hbs', {
    pageTitle: `West Leigh Street Gardens`
  });
});

app.get('/weather-app', (req, res) => {
  res.render('weather-app.hbs', {
    pageTitle: `What's the weather?`
  });
});

app.get('/needs-analysis', (req, res) => {
  res.render('needs-analysis.hbs', {
    pageTitle: `Needs Analysis`
  });
});


app.get('/bad', (req, res) => {
  res.send({
    error: 'ERROR - YOU SUCK'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
