// Server
const mqttBroker = require('./mqttBroker');

mqttBroker.start();


//Client
const mqtt = require('mqtt');

const HOST = 'localhost';
const client = mqtt.connect('mqtt://' + HOST, {port: 1883});

const electricity = require('./generators/electricity');
let start = true;


function generatorLoop(){
	electricity.consumption.now(client)
}

client.on('connect', function () {
	console.log("Connected to " + HOST);

	client.subscribe('#');

	setInterval(function(){
		generatorLoop();
	},1000);
});

client.on('message', async function (topic, message) {
	// When receiving an MQTT message, trigger and action...
	console.log(topic);
	decryptMessage = JSON.parse(message);
	message = JSON.parse(message);
	console.log(message);
});