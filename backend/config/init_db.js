const Sequelize = require('sequelize');
const sequelize = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "db",
    dialect: "postgres",
});

const User = require('../models/models_User');
const Video = require('../models/models_Video');
const Favorite = require('../models/models_Fav');

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

async function initVideo()
{
    const VideoModel = sequelize.models.Video;
    const userExists = !!VideoModel;

    if (!userExists) {
        await Video.sync();
        console.log('Video table created successfully.');
    } else {
        console.log('Video table already exists.');
    }
}

async function initFav()
{
    const FavoriteModel = sequelize.models.Favorite;
    const favExists = !!FavoriteModel;

    if (!favExists) {
        await Favorite.sync();
        console.log('Favorite table created successfully.');
    } else {
        console.log('Favorite table already exists.');
    }
}

const initTable = async () => {
    try {
        await initUser();
        await initVideo();
        await initFav();
    } catch (error) {
        console.error('Error checking or creating User table:', error);
    }
};

module.exports = { initTable };
