var config = {
	queue: {
		host: 'localhost',
		port: 5672,
		login: 'test',
		password: 'test',
		vhost: '/'
	},
	channel: 'new-events',
	slack: {
		webhookUrl: 'https://hooks.slack.com/services/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',
		channel: '#general',
		username: 'pm2s'
	}
};

module.exports = config;