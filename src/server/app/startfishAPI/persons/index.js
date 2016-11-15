const persons = require('express').Router()
const create  = require('./create')
const all     = require('./all')
const single  = require('./single')
const update  = require('./update')
const deletePerson = require('./delete')

persons.get('/', all)
persons.get('/:id', single)
persons.post('/', create)
persons.put('/:id', update)
persons.delete('/:id', deletePerson)

module.exports = persons