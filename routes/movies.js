/**
 * Movie model
 * @author Aldrin Cuvi
 */

const express = require('express');
const router = express.Router();
const data_base = require('../config/data_base');
const Movie = require('../models/Movie.model');
const { sequelize } = require('../models/Movie.model');

//GET all movies
router.get('/', async (req, res) => {

    try {
        const movies = await Movie.findAll();
        res.status(200).json({
            status: "OK",
            movies
        }) 
    } catch (err) {
        res.status(500).json({
            status: 'Server error.',
            msg: 'ERROR: ' + err
        });   
    }
    await sequelize.sync();
});


//POST movies
router.post('/', async (req, res) => {
    try {
        const newMovie = Movie.build(req.body);
        const result = await newMovie.save();
        res.status(200).json({
            status: "OK",
            msg: `You review was succesfylly uploaded!` 
        })
    } catch (err) {
        res.status(500).json({
            status: 'Server error.',
            msg: 'ERROR: ' + err
        });
    }
});

//UPDATE movies
router.put('/:id_pelicula', async (req, res) => {
    try {
        const updateMovie = await Movie.update(
            { director_pelicula: "Aldrin Cuvi"}, 
            { where: 
                { actores_pelicula: 'Emma Stone' }
            }
        );

        res.status(200).json({
            status: "OK",
            msg: `Your movie: ${ nombre_pelicula }, was succesfylly updated.` 
        })

    } catch (err) {
        res.status(500).json({
            status: 'Server error.',
            msg: 'ERROR: ' + err
        });
    }
});

//DELETE movie
router.delete('/:id_pelicula', async (req, res) => {
    try {
        const deleteMovie = Movie.destroy({ where: 
            { nombre_pelicula: "Lalaland" }
        });
        res.status(200).json({
            status: "OK",
            msg: `Review of the movie was succesfully deleted.`
        })
    } catch (err) {
        res.status(500).json({
            status: 'Server error.',
            msg: 'ERROR: ' + err
        });
    }
});


//Add movie
// router.get('/add', (req, res) => {
//     const data = {
//         nombre_pelicula: 'Lalaland',
//         sinopsis_pelicula: 'Algo de romance ',
//         actores_pelicula: 'Emma Stone',
//         director_pelicula: 'No se',
//         duracion_pelicula: '1:30:00',
//         genero_pelicula: 'Comendia romántica',
//         anio_estreno_pelicula: 2017,
//         clasificacion_pelicula: 'B',
//         calificacion_pelicula: 10

//     }
//     let { nombre_pelicula, sinopsis_pelicula, actores_pelicula, 
//         director_pelicula, duracion_pelicula, genero_pelicula, 
//         anio_estreno_pelicula, clasificacion_pelicula, calificacion_pelicula } = data;

//     //Insert into table
//     Movie.create({
//         nombre_pelicula,
//         sinopsis_pelicula,
//         actores_pelicula,
//         director_pelicula,
//         duracion_pelicula,
//         genero_pelicula,
//         anio_estreno_pelicula,
//         clasificacion_pelicula,
//         calificacion_pelicula
//     })
//         .then(movie => res.redirect('/movies'))
//         .catch(err => console.log(err));
// });


module.exports = router;
