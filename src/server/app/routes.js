const api      = require('./personAPI');
const mongoose = require('mongoose');

// config file
const db       = require('../config/db');

module.exports = app => {
	app.use('/', api);

	// try to connect the MongoDB =============================================
	app.get('/connectDB', (req, res)=>{
		// connect to mongoDB

		if(mongoose.connection.readyState === 0){
			mongoose.connect(db.url, err => {
				if(err){
					res.json({connect:'fail'});
				}else{
					res.json({connect:'success'});
				}
			})
		}else{
			res.json({connect:'already connected'});
		}
		
	});

	// frontend routes =========================================================
    // route to handle all angular requests
	app.get('*', function(req, res){
		res.sendfile('../../../dist/index.html');
	});
};