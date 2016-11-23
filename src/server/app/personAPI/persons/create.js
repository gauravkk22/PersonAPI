const Person = require('../../models/person');

module.exports = (req, res) =>{
	Person.create(req.body, (err, data) => {
		if(err){
			res.send(err);
		}else{
			res.status(200).json(data);
		}
	})

}