const mongoose = require('mongoose');


// Defining the data base
// const db = mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
  
// module.exports = db


//connecting to local host
mongoose.connect('mongodb://localhost/TrackIt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})