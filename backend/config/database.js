const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log('Connecting');
    const uri = 'mongodb://localhost:27017/Shopit';
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, family: 4})
    
    .then(con => {
        console.log(`mongoDB Database connected with Host: ${con.connection.host}`)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = connectDatabase;