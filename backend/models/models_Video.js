const Sequelize = require('sequelize');
const seque = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "db",
    dialect: "postgres",
});

const videoSchema = seque.define('Video',
    {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        createdAt: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
        },
        title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        videoUrl: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        likes: {
            type: Sequelize.TEXT,
            defaultValue: '[]',
            get() {
                const value = this.getDataValue('likes');
                return JSON.parse(value);
            },
            set(val) {
                this.setDataValue('likes', JSON.stringify(val));
            }
        },
        views: {
            type: Sequelize.TEXT,
            defaultValue: '[]',
            get() {
                const value = this.getDataValue('views');
                return JSON.parse(value);
            },
            set(val) {
                this.setDataValue('views', JSON.stringify(val));
            }
        },
    },
);

module.exports = videoSchema;
