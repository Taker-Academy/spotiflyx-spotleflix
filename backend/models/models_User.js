const Sequelize = require('sequelize');
const seque = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "localhost",
    dialect: "mariadb",
});

const userSchema = seque.define('User',
    {
        createdAt: {
            type: Sequelize.DataTypes.DATE,
            required: true,
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            required: true,
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            required: true,
        },
        lastName: {
            type: Sequelize.DataTypes.STRING,
            required: true,
        },
        firstName: {
            type: Sequelize.DataTypes.STRING,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = userSchema;
