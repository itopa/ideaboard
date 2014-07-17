// represents project ideas
var Idea = {
	attributes: {
		title: {
			type: 'string',
			required: true
		},
		description: {
			type: 'string',
			required: true
		},
		technologies: {
			type: 'string',
			required: true
		},
		contactEmail: {
			type: 'string',
			required: true
		}.
		numInterested: {
			type: 'integer',
			required: true
		}
	}
};

module.exports = Idea;