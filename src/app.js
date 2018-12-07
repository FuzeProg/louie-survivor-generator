// Server
const mqttBroker = require('./mqttBroker');

mqttBroker.start();


//Client
const mqtt = require('mqtt');

const HOST = 'localhost';
const client = mqtt.connect('mqtt://' + HOST, {port: 1883});

const electricity = require('./generators/electricity'),
	food = require('./generators/food'),
	world = require('./generators/world'),
	expedition = require('./generators/expedition');
let start = true;


function generatorLoop(){
	electricity.production.now(client);
	electricity.production.day(client);
	electricity.consumtion.now(client);
	electricity.consumtion.day(client);
	electricity.cell.production.day(client);
	electricity.cell.production.now(client);
	electricity.wind.production.day(client);
	electricity.wind.production.now(client);
	electricity.wind.speed(client);
	electricity.sun.state(client);
	electricity.sun.production.day(client);
	electricity.sun.production.now(client);

	food.water.consumtion.day(client);
	food.water.production.day(client);
	food.water.stock.now(client);
	food.food.consumtion.day(client);
	food.food.production.day(client);
	food.food.stock.now(client);

	world.temperature.now(client);
	world.temperature.interval.min(client);
	world.temperature.interval.max(client);

	expedition.bpm.now(client);
	expedition.feed.now(client);
	expedition.geoposition.distance(client);
	expedition.geoposition.time(client);
	expedition.geoposition.long(client);
	expedition.geoposition.lat(client);
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