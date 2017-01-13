const express = require('express');

const app = express();

app.get('/hi/:country', function(req, res) {
  const name = req.query.name;

  const hellos = {
    England: `hi, my name is ${name}!`,
    France: `bonjour, mon nom est ${name}!`
  }

  res.status(200).json({ say: hellos[req.params.country] });
});

module.exports = app;
