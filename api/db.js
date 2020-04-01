var db;

const init = () => {
  const sqlite = require('sqlite3').verbose();
  db = new sqlite.Database('pages.db');
}


const fetchPages = (callback) => {
  return new Promise((resolve,reject) => {
    var response = [];
    db.all('SELECT * FROM page', function(err, rows) {
      if (err) {
          throw err;
        }
      rows.forEach(function (row) {
          response.push({
            "id":row.id,
            "url":row.url,
            "title":row.url,
            "tags":row.tags
          });
      });
      resolve(response);
    });
  });
}



module.exports =  {
  init,fetchPages
}
