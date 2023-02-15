const {sequelize} = require('./db');

// TODO - define the Musician model
let Musician = sequelize.define('Musician', {
    name: sequelize.STRING,
    instrument: sequelize.STRING
});

module.exports = {
    Musician
};