const db = require('./api/db');
const api = require('./api/api');



db.init();


const app = api.init();

app.listen(3001, () => {
  console.log('Example app listening on port 3000!')
});
