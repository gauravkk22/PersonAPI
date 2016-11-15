var routes  = require('express').Router()
var persons = require('./persons')

routes.get('/', (req, res)=> {
	res.status(200).json({message:'connected!'})
})

routes.use('/person', persons)

module.exports = routes;