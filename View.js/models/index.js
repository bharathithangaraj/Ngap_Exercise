const mongoose = require('mongoose')

//const url = 'mongodb://localhost:27017/nGap'

mongoose.connect('mongodb://localhost:27017/nGap', () =>{
    if(err){
        console.log(err)
    } else {
        console.log('successfully connect')
    }
});

//mongoose.connect(url,{useNewUrlParser:true})

module.exports.Users = require('./users')