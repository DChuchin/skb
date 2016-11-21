const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/*', (req, res)=> {
  let color;
  if (req.query.color) {
    color=req.query.color.trim().replace(/[^0-9,a-f,A-F]/,'-------------');
  }
  let result;
  if (color && isValid(color)) {
    result = toHEX(color);
    res.status(200).send(result);
  } else {
    console.log('ivalid');
    res.status(404).send('Invalid color');
  }
});

function isValid(str) {
  if (str.length!=3&&str.length!=6) {

    return false;
  }
  return true;
};

function toHEX(str) {
  if (str.length == 3) {
    console.log(str.length);
    str = str.split('').map((char)=> char + char).join('');
    console.log(str.length);
  }
  let res = '#' + str.toLowerCase();
  return res;
}

app.listen(8000, ()=> {
  console.log('listening port 8000');
})
