/**
 * Movie model
 * @author Aldrin Cuvi
 */

const { Sequelize } = require('sequelize');

//Datbase connection
module.exports = new Sequelize('BD_Movie_Review_App', 'postgres', 'Arj030509', {
    host: 'localhost',
    dialect: 'postgres'
});
