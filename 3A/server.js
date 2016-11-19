
const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('isomorphic-fetch');

app.use(cors());

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {};

fetch(pcUrl)
  .then(async (res) =>{
    pc = await res.json();
    console.dir(pc);
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });

const middleware = function(req,res,next) {
  console.log(req);
  next();
}

app.get('/*', (req, res)=> {
  let route = req.params[0];
  console.log(route);
  let result;
  if (route) {
    let routeArr = parseRoute(route);
    result = JSON.stringify(deepSeek(routeArr, pc));
  } else {
    result = pc;
  }
  res.status(200).send(result);
});

function parseRoute(str) {
  return str.split('/');
}
function deepSeek(arr, obj) {
  if (arr.length == 1) {
    return obj[arr[0]]
  } else {
    let prop = arr.shift()
    return deepSeek(arr, obj[prop]);
  }
}

app.listen(3000, ()=> {
  console.log('listening port 3000');
})
