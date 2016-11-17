const Person = require('../../models/person');

module.exports = (req, res) => {

	const id = req.params.id.toString();
	
	Person.findOne({"_id":id}, (err, data)=>{
		if(err){
			res.send(err);
		}else{
			res.status(200).json(data);
		}
	})
}
