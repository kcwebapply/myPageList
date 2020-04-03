const db = require('./db');
const cheerio = require('cheerio');
const request = require("request");
const bodyParser = require('body-parser');

const init = () => {
  var express = require('express');
  var router = express.Router();
  const app = express();
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  router.get('/fetch', function(req,res){
    db.fetchPages().then(rows => {
      res.json(rows);
    }).catch(error => {console.log("error::",error);});
  });


  router.post('/add',function(req,res){
    const {url,tags} = req.body;
    request.get({
        url
    }, function (error, response, body) {
        const $ = cheerio.load(body);
        let title = $("title").text();
        const trimBody = body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
        db.addPage(url,title,'',body).then( () => {
          res.json(trimBody);
        });
    });
  });

  router.post('/delete',function(req,res){
    const {id} = req.body;
    db.deletePage(id).then(()=>{
      res.json("{}");
    })
  });

  router.get('/search',function(req,res){
    const {word,tag} = req.query;
    if(word){
      db.searchByContent(word).then(rows => {
        res.json(rows);
      });
    }else if (tag) {
      db.searchByTag(tag).then(rows => {
        res.json(rows);
      });
    }

  });

  app.use('/api/',router);

  return app;
}

module.exports = {
  init
}
