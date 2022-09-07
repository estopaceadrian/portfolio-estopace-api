const config = require('../config/dev');
const mongoose = require('mongoose');
const fakeDB = require('./FakeDB');

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAdnModify: false,
  },
  async (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('> Started adding data to database...');
      await fakeDB.populate();
      await mongoose.connection.close();
      console.log('> Data has been added...');
    }
  }
);
