
const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    priority: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const NoteModel = mongoose.model("Note", NoteSchema)

module.exports = NoteModel