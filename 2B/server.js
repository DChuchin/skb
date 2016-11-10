const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res)=> {
  const fullName= req.query.fullname.trim().split(/\s+/).reverse();
  const [lastName, secondName, firstName] = fullName;
  let result;

  if ((fullName.length > 3)||(!fullName.length)||(!lastName)||(!isValid(fullName))) {
    result = 'Invalid fullname';
  } else {
    result = capitalize(lastName.toLowerCase()) + ' ' + cutName(firstName) + cutName(secondName);
  }
  console.log(fullName);
  console.log(result);
  res.status(200).send(result.trim());
});

function isValid(arr) {
  return !arr.some(item => {
    return !!~item.search(/[\d\-\_\!\?\(\)\/\\]/);
  })
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function cutName(str) {
  return str ? str[0].toUpperCase() + '. ': '';
};

app.listen(3000, ()=> {
  console.log('listening port 3000');
});
