
const noteRouter = require('express').Router()

const Note = require('../models/Note')

noteRouter
.get('/', (req, res) => {
    Note.find().sort({date: 'desc'})
        .then(docs => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.json(docs)
        })
        .catch(err => res.json(err))
})
.post('/', (req, res) => {
    const { title, priority } = req.body
    Note.find({ title }).then(result => {
        if (result.length != 0) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.json({
                error: "Note exists!"
            })
            return
        }
        Note.create({ title, priority })
            .then(note => {
                res.statusCode = 201
                res.setHeader('Content-Type', 'application/json')
                res.json(note)
            })
            .catch(err => res.json(err))
    })
})

module.exports = noteRouter