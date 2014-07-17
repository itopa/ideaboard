// represents a hackathon
var Idea = {
	attributes: {
		name: {
			type: 'string',
			required: true
		},
		startDate: {
			type: 'datetime',
			required: true
		},
		endDate: {
			type: 'datetime',
			required: true
		},
		location: {
			type: 'string',
			required: true
		},
		website: {
			type: 'string',
			required: true
		}
	}
};

module.exports = Idea;