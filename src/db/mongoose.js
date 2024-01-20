//ODM library used in order to connect mongodb to express.js
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})

