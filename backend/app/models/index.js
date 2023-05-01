// This is the file to initialize database connection using Sequelize
const config = require("../config/db.config.js")

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorALiases: false,
        /* Configuring connection pool */
        pool : {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.audio_files = require("../models/audio_files.model.js")(sequelize, Sequelize);

db.user.hasMany(db.audio_files,{as:"user_id" });
db.audio_files.belongsTo(db.user,{
    foreignKey: "userid",
    as: "user",
})

module.exports = db;