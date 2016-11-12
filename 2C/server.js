
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/*', (req, res)=> {
  let name = '@' + req.url.split('/').reverse()[0];
  res.status(200).send(name);
});

app.listen(3000, ()=> {
  console.log('listening port 3000');
})
