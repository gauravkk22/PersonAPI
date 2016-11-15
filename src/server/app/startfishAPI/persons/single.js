const Person = require('../../models/person')

module.exports = (req, res) => {

	const id = req.params.id.toString()
	
	Person.findOne({"_id":id}, (err, data)=>{
		console.log(data)
		if(err){
			res.send(err)
		}else{
			console.log('success find')
			res.status(200).json(data)
		}
	})
}
