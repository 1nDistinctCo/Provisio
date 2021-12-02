const express = require('express');
const app = express();
const morgan = morgan();
const port = 7000;
const helmet = require('helmet');

app.set('view engine', 'pug');
app.disable('x-powered-by');
app.use(morgan('combined'))
app.use(helmet())

app.get('/', (req, res) => {
    result.render("index");
  });

  app.on('close', () => {
    console.log('Server closing %d', port)
  })

const server = app.listen(port || 7000 , () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
