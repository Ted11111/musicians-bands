const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
let Band = Sequelize.define('Band', {
    players: sequelize.STRING,
    instruments: sequelize.STRING
});

module.exports = {
    Band
};