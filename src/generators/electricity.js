const tools = require('../tools');

const electricity = {
	production: {},
	consumtion: {},
	cell: {
		production: {},
		levels: [{}]
	},
	wind: {
		production: {},
	},
	sun: {
		production: {}
	},
	equipment: [{}]
};

const electricityValue = {
	production: {
		day: 9100,
		now: 100000
	},
	consumtion: {
		day: 9000,
		now: 90000
	},
	cell: {
		production: {
			day: 1000,
			now: 100
		},
		levels: {}
	},
	wind: {
		production: {
			day: 50000,
			now: 4300
		},
		speed: 15000
	},
	sun: {
		state: 87,
		production: {
			day: 80000,
			now: 7500
		}
	},
	equipment: {}
};

electricity.production.now = (client) => {

	electricityValue.production.now = tools.randomUpAndDown(0.01, electricityValue.production.now);
	
	client.publish('electricity/production/now', JSON.stringify(electricityValue.production.now));
};

electricity.production.day = (client) => {
	
	electricityValue.production.day = tools.randomUpAndDown(0.01, electricityValue.production.day);
	
	client.publish('electricity/production/now', JSON.stringify({
		value: electricityValue.production.day
	}));
};

electricity.consumtion.now = (client) => {

	electricityValue.consumtion.now = tools.randomUpAndDown(0.01, electricityValue.consumtion.now);

	client.publish('electricity/consomation/now', JSON.stringify(electricityValue.consumtion.now));
};

electricity.consumtion.day = (client) => {

	electricityValue.consumtion.day = tools.randomUpAndDown(0.01, electricityValue.consumtion.day);

	client.publish('electricity/consomation/day', JSON.stringify({
		value: electricityValue.consumtion.day
	}));
};

electricity.cell.production.day = (client) => {

	electricityValue.cell.production.day = tools.randomUpAndDown(0.01, electricityValue.production.day);

	client.publish('electricity/cell/production/day', JSON.stringify({
		value: electricityValue.cell.production.day
	}))
};

electricity.cell.production.now = (client) => {

	electricityValue.cell.production.now = tools.randomUpAndDown(0.01, electricityValue.cell.production.now);

	client.publish('electricity/cell/production/now', JSON.stringify(electricityValue.cell.production.now))
};

electricity.wind.production.day = (client) => {

	electricityValue.wind.production.day = tools.randomUpAndDown(0.01, electricityValue.wind.production.day);

	client.publish('electricity/wind/production/day', JSON.stringify({
		value: electricityValue.wind.production.day
	}))
};

electricity.wind.production.now = (client) => {

	electricityValue.wind.production.now = tools.randomUpAndDown(0.01, electricityValue.wind.production.now);

	client.publish('electricity/wind/production/now', JSON.stringify({value: electricityValue.wind.production.now}))
};

electricity.wind.speed = (client) => {

	electricityValue.wind.speed = tools.randomUpAndDown(0.01, electricityValue.wind.speed);

	client.publish('electricity/wind/speed', JSON.stringify({value: electricityValue.wind.speed}))
};

electricity.sun.state = (client) => {

	electricityValue.sun.state = tools.randomUpAndDown(0.01, electricityValue.sun.state);

	client.publish('electricity/sun/state', JSON.stringify({ value: electricityValue.sun.state}))
};

electricity.sun.production.day = (client) => {

	electricityValue.sun.production.day = tools.randomUpAndDown(0.01, electricityValue.sun.production.day);

	client.publish('electricity/sun/production/day', JSON.stringify({
		value: electricityValue.sun.production.day
	}))
};

electricity.sun.production.now = (client) => {

	electricityValue.sun.production.now = tools.randomUpAndDown(0.01, electricityValue.sun.production.now);

	client.publish('electricity/sun/production/now', JSON.stringify({value: electricityValue.sun.production.now}))

};

module.exports = electricity;