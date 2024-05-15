const Favorite = require("./models_Fav");
const Sequelize = require('sequelize');
const seque = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "db",
    dialect: "postgres",
});

const userSchema = seque.define('User',
    {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        createdAt: {
            type: Sequelize.DataTypes.DATE,
            allowNull:false,
            defaultValue: seque.literal('CURRENT_TIMESTAMP')
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
    });

    userSchema.hasOne(Favorite, { as: 'favorites' });

module.exports = userSchema;
