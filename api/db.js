var db;

const init = () => {
  const sqlite = require('sqlite3').verbose();
  db = new sqlite.Database('pages.db');
}


const fetchPages = () => {
  return new Promise((resolve,reject) => {
    var response = [];
    db.all('SELECT * FROM page ORDER BY ID desc', function(err, rows) {
      if (err) {
          throw err;
        }
      rows.forEach(function (row) {
          response.push({
            "id":row.id,
            "url":row.url,
            "title":row.title,
            "tags":row.tags
          });
      });
      resolve(response);
    });
  });
}

const addPage  = (url,title,tags,content) => {
  return new Promise((resolve,reject) => {
    db.run("INSERT INTO page(url,title,tags,content) VALUES (?,?,?,?)",[url,title,tags,content]);
    resolve();
  });
}

const searchByContent = (word) => {
  return new Promise((resolve,reject) => {
    console.log(word);
    var response = [];
    db.all(`SELECT * FROM page where content like "%${word}%" ORDER BY ID desc`, function(err, rows) {
      if (err) {
          throw err;
        }
      rows.forEach(function (row) {
          response.push({
            "id":row.id,
            "url":row.url,
            "title":row.title,
            "tags":row.tags
          });
      });
      resolve(response);
    });
  });
}

const searchByTag = (tag) => {
  return new Promise((resolve,reject) => {
    var response = [];
    db.all(`SELECT * FROM page where tags like "%${tag}%"`, function(err, rows) {
      if (err) {
          throw err;
        }
      rows.forEach(function (row) {
          response.push({
            "id":row.id,
            "url":row.url,
            "title":row.title,
            "tags":row.tags
          });
      });
      resolve(response);
    });
  });
}

const deletePage = (id) => {
  return new Promise((resolve,reject) => {
    db.run("DELETE FROM page where id = ?",[id]);
    resolve();
  });
}



module.exports =  {
  init,fetchPages,addPage,deletePage,searchByContent,searchByTag
}
