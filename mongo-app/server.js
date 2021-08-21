const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({ success:false, data: [1,2,3,false, { a: 1, b: 2, c: 4}] });
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
