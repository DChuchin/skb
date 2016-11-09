const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res)=> {
  const fullName= req.query.fullname;
  res.status(200).send(fullName);
});

app.listen(3000, ()=> {
  console.log('listening port 3000');
})
