const Sequelize = require('sequelize');
const seque = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "localhost",
    dialect: "mariadb",
});

const videoSchema = seque.define('Video',
    {
        createdAt: {
            type: Sequelize.DataTypes.DATE,
            required: true,
        },
        title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },
        videoUrl: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        thumbnailUrl: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        likes: {
            type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.INTEGER),
            defaultValue: []
        },
        views: {
            type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.INTEGER),
            defaultValue: []
        },
    },
);

module.exports = videoSchema;
