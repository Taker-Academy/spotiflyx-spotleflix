const Sequelize = require('sequelize');
const seque = new Sequelize('spotiflyx', process.env.USER_DB, process.env.MDP_DB, {
    host: "0.0.0.0",
    dialect: "mariadb",
});

const connectDB = async () => {
    try {
       await seque.authenticate();
        console.log("DB mariadb is connected !");
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

module.exports = connectDB;
