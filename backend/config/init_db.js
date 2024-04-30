const Sequelize = require('sequelize');
const seque = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "localhost",
    dialect: "mariadb",
    port: 3306,
});

const User = require('../models/models_User');

async function initUser()
{
    const userExists = await seque.getQueryInterface().showAllTables().then(tables => tables.includes('User'));

    if (!userExists) {
        await User.sync({ force: false });
        console.log('User table created successfully.');
    } else {
        console.log('User table already exists.');
    }
}

const initTable = async () => {
    try {
        await initUser();
    } catch (error) {
        console.error('Error checking or creating User table:', error);
    }
};

module.exports = { initTable };
