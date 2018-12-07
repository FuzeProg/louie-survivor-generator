const tools = require('../tools');

const consumption = {};
const consumptionValue = {
	now: 9000,
	day: 90000
};

consumption.now = (client) => {

	consumptionValue.now = tools.randomUpAndDown(0.01, consumptionValue.now);

	client.publish('electricity/consomation/now', JSON.stringify(consumptionValue.now));
};

consumption.day = (client) => {

	consumptionValue.day = tools.randomUpAndDown(0.01, consumptionValue.now);

	client.publish('electricity/consomation/day', JSON.stringify({
		"value": consumptionValue.day
	}));
};

exports.consumption = consumption;