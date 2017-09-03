// Import
const express = require('express');
const bodyParser = require('body-parser');

// Server
const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Get
app.get('/', (req, res) => {
  res.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir taper en POST avec Axios depuis ton challenge Login sur les URLs suivantes :</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><a href="http://localhost:3000/login">http://localhost:3000/login</a></li>
        <li><a href="http://localhost:3000/forgot">http://localhost:3000/forgot</a></li>
      </ul>
    </div>
  `);
})

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'bouclierman@herocorp.io' && password === 'jennifer') {
    res.send('John');
  }
  else if (email === 'acidman@herocorp.io' && password === 'fructis') {
    res.send('Burt');
  }
  else if (email === 'captain.sportsextremes@herocorp.io' && password === 'pingpong') {
    res.send('Karin');
  }
  else {
    res.status(400).end();
  }
});

// Forgot password
app.post('/forgot', (req, res) => {
  const { email } = req.body;
  if (
    email === 'bouclierman@herocorp.io'
    || email === 'acidman@herocorp.io'
    || email === 'captain.sportsextremes@herocorp.io'
  ) {
    res.status(200).end();
  }
  else {
    res.status(400).end();
  }
});

// Start on :3000
app.listen(3000);
