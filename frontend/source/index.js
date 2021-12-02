const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (request, result) => {
    result.render("index",{name:"Ciaran"});
  });

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });