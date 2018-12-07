const tools = require('../tools');

const food = {
    water: {
        consumtion: {},
        production: {},
        stock: {}
    },
    food: {
        consumtion: {},
        production: {},
        stock: {}
    }
};

const foodValues = {
    water: {
        consumtion: {
            day: 2
        },
        production: {
            day: 4
        },
        stock: {
            now: 100
        }
    },
    food: {
        consumtion: {
            day: 1500
        },
        production: {
            day: 2000
        },
        stock: {
            now: 3000
        }
    }
};

food.water.consumtion.day = (client) => {

    foodValues.water.consumtion.day = tools.randomUpAndDown(0.01, foodValues.water.consumtion.day);

    client.publish('food/water/consumtion/day', JSON.stringify({
        value: foodValues.water.consumtion.day
    }))
};

food.water.production.day = (client) => {

    foodValues.water.production.day = tools.randomUpAndDown(0.01, foodValues.water.production.day);

    client.publish('food/water/production/day', JSON.stringify({
        value: foodValues.water.production.day
    }))
};

food.water.stock.now = (client) => {

    foodValues.water.stock.now = tools.randomUpAndDown(0.01, foodValues.water.stock.now);

    client.publish('food/water/stock/now', JSON.stringify({ value: foodValues.water.stock.now}))
};

food.food.consumtion.day = (client) => {

    foodValues.food.consumtion.day = tools.randomUpAndDown(0.01, foodValues.food.consumtion.day);

    client.publish('food/food/consumtion/day', JSON.stringify({
        value: foodValues.food.consumtion.day
    }))
};

food.food.production.day = (client) => {

    foodValues.food.production.day = tools.randomUpAndDown(0.01, foodValues.food.production.day);

    client.publish('food/food/production/day', JSON.stringify({
        value: foodValues.food.production.day
    }))
};

food.food.stock.now = (client) => {

    foodValues.food.stock.now = tools.randomUpAndDown(0.01, foodValues.food.stock.now);

    client.publish('food/food/stock/now', JSON.stringify({value: foodValues.food.stock.now}))
};

module.exports = food;