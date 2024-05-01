const Sequelize = require('sequelize');
const sequelize = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "localhost",
    dialect: "mariadb",
});

const User = require('../models/models_User');

async function initUser()
{
    const UserModel = sequelize.models.User;
    const userExists = !!UserModel;

    if (!userExists) {
        await User.sync();
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
