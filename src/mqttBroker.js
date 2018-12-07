const mosca = require('mosca');

exports.start = () => {
	const server = new mosca.Server( {
		port: 1883,
	});

	server.on('ready', setup);

	function setup() {
		console.log('MQTT server is up and running');
	}
};







