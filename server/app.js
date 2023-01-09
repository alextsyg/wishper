const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('test');
});

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
})
