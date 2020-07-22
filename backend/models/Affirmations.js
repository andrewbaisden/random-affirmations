const fs = require('fs');
const path = require('path');

const p = path.join(`${__dirname}/../data/affirmations.json`);

const getAffirmationsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class Affirmations {
	constructor(id, name, img) {
		this.id = id;
		this.name = name;
		this.img = img;
	}
	save() {
		getAffirmationsFromFile((affirmations) => {
			affirmations.push(this);

			fs.writeFile(p, JSON.stringify(affirmations), (err) => {
				console.log(err);
			});
		});
	}
	static fetchAll(cb) {
		getAffirmationsFromFile(cb);
	}
	static findById(id, cb) {
		getAffirmationsFromFile((affirmation) => {
			const affirmationId = affirmation.find((af) => af.id === id);
			cb(affirmationId);
		});
	}
};
