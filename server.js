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

app.get('/gardens2018', (req, res) => {
  res.render('2018gardens.hbs', {
    pageTitle: `2018 West Leigh Street Gardens`
  });
});

app.get('/gardens2017', (req, res) => {
  res.render('2017gardens.hbs', {
    pageTitle: `2017 West Leigh Street Gardens`
  });
});

app.get('/gardens2016', (req, res) => {
  res.render('2016gardens.hbs', {
    pageTitle: `2016 West Leigh Street Gardens`
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

app.get('/nightstand', (req, res) => {
  res.render('nightstand.hbs', {
    pageTitle: `DIY Nightstand`
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
