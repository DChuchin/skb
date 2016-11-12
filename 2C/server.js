
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/*', (req, res)=> {
  if (req.query.username){
    let name = req.query.username.split('/').reverse()[0];
    let result = name[0]=='@' ? name : '@' + name;
    res.status(200).send(result);
  } else
  res.status(200).send('Invalid username');
});

app.listen(3000, ()=> {
  console.log('listening port 3000');
})
