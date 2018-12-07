const tools = require('../tools');

const expedition = {
    bpm: {},
    feed: {},
    geoposition: {},
    weather: {}
};

const expeditionValues = {
    bpm: {
        now:65
    },
    feed: {
        now: 89
    },
    geoposition: {
        distance: 144,
        time: 27,
        long: 34,
        lat: 49
    },
    weather: {
        message: "Soleil"
    }
};

expedition.bpm.now = (client) => {

    expeditionValues.bpm.now = tools.randomUpAndDown(0.01, expeditionValues.bpm.now);

    client.publish('expedition/bpm/now', JSON.stringify({value: expeditionValues.bpm.now}));
};

expedition.feed.now = (client) => {

    expeditionValues.feed.now = tools.randomUpAndDown(0.01, expeditionValues.feed.now);

    client.publish('expedition/feed/now', JSON.stringify({value: expeditionValues.feed.now}));
};

expedition.geoposition.distance = (client) => {

    expeditionValues.geoposition.distance = tools.randomUpAndDown(0.01, expeditionValues.geoposition.distance);

    client.publish('expedition/geoposition/distance', JSON.stringify({value: expeditionValues.geoposition.distance}));
};

expedition.geoposition.time = (client) => {

    expeditionValues.geoposition.time = tools.randomUpAndDown(0.01, expeditionValues.geoposition.time);

    client.publish('expedition/geoposition/time', JSON.stringify({value: expeditionValues.geoposition.time}));
};

expedition.geoposition.long = (client) => {

    expeditionValues.geoposition.long = tools.randomUpAndDown(0.01, expeditionValues.geoposition.long);

    client.publish('expedition/geoposition/long', JSON.stringify({value: expeditionValues.geoposition.long}));
};

expedition.geoposition.lat = (client) => {

    expeditionValues.geoposition.lat = tools.randomUpAndDown(0.01, expeditionValues.geoposition.lat);

    client.publish('expedition/geoposition/lat', JSON.stringify({value: expeditionValues.geoposition.lat}));
};

module.exports = expedition;