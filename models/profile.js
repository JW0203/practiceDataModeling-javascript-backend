const { DataTypes} = require("sequelize");
const sequelize = require('../config/database');



const Profile = sequelize.define('profiles', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gender:{
        type: DataTypes.STRING
    },
    Photo : {
        type: DataTypes.STRING
    }
})

module.exports = Profile;