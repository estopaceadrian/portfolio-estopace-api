const express = require('express');
const server = express();
const { connect } = require('./db');

async function runServer() {
  await connect();
  server.use('/api/v1/portfolios', require('./routes/portfolio'));

  const PORT = process.env.PORT || 3001;
  server.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log('Server ready on port: ' + PORT);
  });
}

runServer();

// server.get('/test', (req, res) => {
//   return res.json({ message: 'test is working!' });
// });
