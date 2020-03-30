const db = require('./api/infrastructure/db');

var express = require('express');
var router = express.Router();



router.get('/test', function(req,res){
  db.fetchPages().then(rows => {
    console.log("列：",rows);
    res.json(rows);
  }).catch(error => {console.log("error::",error);});
});

db.init();

const app = express();
app.use('/api/',router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
