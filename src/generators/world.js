const tools = require('../tools');

const world = {
    temperature: {
        interval:{}
    },
    weather: {}
};

const worldValues = {
    temperature: {
        now: 42,
        interval: {
            min: 28,
            max: 45
        }
    },
    weather: {
        message: "Rien à signaler"
    }
};

world.temperature.now = (client) => {

    worldValues.temperature.now = tools.randomUpAndDown(0.01, worldValues.temperature.now);

    client.publish('world/temperature/now', JSON.stringify({value: worldValues.temperature.now}))
};

world.temperature.interval.min = (client) => {

    worldValues.temperature.interval.min = tools.randomUpAndDown(0.01, worldValues.temperature.interval.min);

    client.publish('world/temperature/interval/minimale', JSON.stringify({value: worldValues.temperature.interval.min}))
};

world.temperature.interval.max = (client) => {

    worldValues.temperature.interval.max = tools.randomUpAndDown(0.01, worldValues.temperature.interval.max);

    client.publish('world/temperature/interval/maximale', JSON.stringify({value: worldValues.temperature.interval.max}))
};

module.exports = world;