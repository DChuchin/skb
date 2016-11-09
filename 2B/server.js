const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res)=> {
  const a =  req.query.a | 0,
        b = req.query.b | 0,
      sum = +a + +b;
  res.status(200).send(sum.toString());
});

app.listen(3000, ()=> {
  console.log('listening port 3000');
})
