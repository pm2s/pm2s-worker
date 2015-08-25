var config = require('./config');

var worque = require('worque');
var slack = require('slack-notify')(config.slack.webhookUrl);

var client = new worque.Client(config.queue);

client.subscribe(config.channel, function (message, ack) {
	console.log(message);

	slack.send({
		channel: config.slack.channel,
		username: config.slack.username,
		text: JSON.stringify(message)
	});

	slack.onError = function (err) {
		console.log('API error:', err);
	};

	ack();
});

