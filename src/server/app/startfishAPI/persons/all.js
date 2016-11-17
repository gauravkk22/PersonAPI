const Person = require('../../models/person');

module.exports = (req, res) => {

	Person.find({}, (err, data) =>{
		if(err){
			res.send(err);
		}else{
			res.send({list:data});
		}
	})
}
