const Affirmations = require('../models/Affirmations');

exports.geAffirmations = (req, res) => {
	Affirmations.fetchAll((affirmation) => {
		console.log(affirmation);
		res.json(affirmation);
	});
};

exports.getAffirmation = (req, res) => {
	const affirmationId = req.params.affirmationId;

	Affirmations.findById(affirmationId, (affirmation) => {
		if (!affirmation) {
			res.json({ msg: 'No ID found' });
		}
		console.log(affirmation);
		res.json(affirmation);
	});
};

exports.postAffirmations = (req, res) => {
	const { id, name, img } = req.body;

	const affirmation = new Affirmations(id, name, img);
	affirmation.save();
	res.redirect('/');
};
