const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res)=> {
  const fullName= req.query.fullname.split(' ').reverse();
  const [lastName, secondName, firstName] = fullName;
  let result;

  if ((fullName.length > 3)||(!fullName.length)||(!lastName)) {
    result = 'Invalid fullname';
  } else {
    result = lastName + ' ' + cutName(firstName) + cutName(secondName);
  }
  console.log(fullName);
  console.log(result);
  res.status(200).send(result.trim());
});

function cutName(str) {
  return str ? str[0]+ '. ': '';
}
app.listen(3000, ()=> {
  console.log('listening port 3000');
})
