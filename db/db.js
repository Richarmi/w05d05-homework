const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/user";
mongoose.connect(url, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('mongoose is connected');
});

mongoose.connection.on('error', (err) => {
  console.log('mongoose error');
});

mongoose.connection.on('disconnected', () => {
  console.log('mongoose is disconnected');
});
