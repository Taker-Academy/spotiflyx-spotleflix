const Sequelize = require('sequelize');
const sequelize = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "db",
    dialect: "postgres",
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
    urlId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = favSchema;
