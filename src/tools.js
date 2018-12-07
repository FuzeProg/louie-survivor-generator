exports.randomIntgetRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

exports.randomUpAndDown = (rate, value) => {
	let rand = Math.random();

	if (rand > 0.5)
		return value + value * 0.01;
	else
		return value - value * 0.01;
};