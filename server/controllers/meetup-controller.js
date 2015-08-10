var Meetup = require('../models/meetup');

module.exports.create = function(req, res) {	
	console.log('req.body=', req.body);
	var meetup = new Meetup(req.body);
	meetup.save(function(err, result) {
		res.json(result);
	});
};

module.exports.list = function(req, res) {	
	console.log('req.body=', req.body);
	Meetup.find({}, function(err, results) {
		res.json(results);
	});
};