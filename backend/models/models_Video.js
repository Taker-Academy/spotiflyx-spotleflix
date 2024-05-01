const Sequelize = require('sequelize');
const seque = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "localhost",
    dialect: "mariadb",
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
        description: {
            type: Sequelize.DataTypes.TEXT,
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
            type: Sequelize.TEXT, // Ou Sequelize.JSON
            defaultValue: '[]', // Valeur par défaut comme une chaîne JSON vide
            get() {
                // Analyser la chaîne JSON pour récupérer les données
                const value = this.getDataValue('likes');
                return JSON.parse(value);
            },
            set(val) {
                // Convertir les données en chaîne JSON lors de la mise à jour
                this.setDataValue('likes', JSON.stringify(val));
            }
        },
        views: {
            type: Sequelize.TEXT, // Ou Sequelize.JSON
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
