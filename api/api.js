const db = require('./db');

const init = () => {
  var express = require('express');
  var router = express.Router();

  router.get('/test', function(req,res){
    db.fetchPages().then(rows => {
      console.log("列：",rows);
      res.json(rows);
    }).catch(error => {console.log("error::",error);});
  });

  const app = express();
  app.use('/api/',router);

  return app;
}

module.exports = {
  init
}
