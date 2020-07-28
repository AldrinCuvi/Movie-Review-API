/**
 * @author Aldrin Cuvi
 */

const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/data_base');


const Movie = sequelize.define("TMAEMOVIEREVIEW", {

    id_pelicula: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    nombre_pelicula: {
        type: DataTypes.STRING(100),
        validate:{
            notEmpty: true
        }
    },
    sinopsis_pelicula: {
        type: DataTypes.TEXT,
        validate:{
            notEmpty: true
        }
    },
    actores_pelicula: {
        type: DataTypes.STRING(100),
        validate:{
            notEmpty: true
        }
    },
    director_pelicula: {
        type: DataTypes.STRING(50),
        validate:{
            notEmpty: true
        }
    },
    duracion_pelicula: {
        type: DataTypes.STRING(10),
        validate:{
            notEmpty: true
        }
    },
    genero_pelicula: {
        type: DataTypes.STRING(100),
        validate:{
            notEmpty: true  
        }
    },
    anio_estreno_pelicula: {
        type: DataTypes.INTEGER,
        validate:{
            max: 2030,
            min: 1800
        }
    },
    clasificacion_pelicula: {
        type: DataTypes.STRING(10),
        validate:{
            notEmpty: true
        }
    },
    calificacion_pelicula: {
        type: DataTypes.DOUBLE,
        validate:{
            max: 10.0,
            min: 0.1
        }
    },

},
    { timestamps: false }
);


module.exports = Movie;