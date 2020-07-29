/**
 * Movie model
 * @author Aldrin Cuvi
 */

const { Sequelize } = require('sequelize');

// //Datbase connection
// module.exports = new Sequelize('BD_Movie_Review_App', 'postgres', 'Arj030509', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

//Connection to Heroku
module.exports = new Sequelize({
    username:'sqhymiigtjcekr',
    password:'09a558686271a1bc857cda187efeba1346e1bbab6616c3c3176f987e35c23680',
    database:'daeoeit1q89cqs',
    host: 'ec2-54-81-37-115.compute-1.amazonaws.com',
    dialect: 'postgres',
});