const Sequelize = require('sequelize');
const sequelize = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "localhost",
    dialect: "mariadb",
});

const favSchema = sequelize.define('Favorite',
{
    id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.ENUM('video', 'music'),
        allowNull: false
    },
    favoritedItemId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = favSchema;
