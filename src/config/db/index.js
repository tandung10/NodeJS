const mongoose = require('mongoose');

async function connect() {
    try {
        await await mongoose.connect('mongodb://127.0.0.1:27017/Education_Dev',
            {
                useNewUrlParser: true, useUnifiedTopology: true,
            });
        console.log('Connect successfully!!!');
    }
    catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };