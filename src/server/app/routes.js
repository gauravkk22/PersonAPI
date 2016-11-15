var api = require('./startfishAPI')

module.exports = app => {
	console.log('inside routes.js')
	app.use('/', api)

	// frontend routes =========================================================
    // route to handle all angular requests
	app.get('*', function(req, res){
		res.sendfile('../../../dist/index.html')
	})
}