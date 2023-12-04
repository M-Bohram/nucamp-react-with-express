
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const noteRouter = require('./routes/NoteRouter')

const PORT = process.env.PORT || 5000
const mongoConnectionStr = 'mongodb://localhost:27017/nucampdb'

mongoose.connect(mongoConnectionStr, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => {
    console.log("Connected successfully!")

    const app = express()

    app.use(express.json())
    app.use(cors({ origin: '*'}))

    app.use('/notes', noteRouter)

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})
.catch(err => console.log(err))