/**
 * Movie model
 * @author Aldrin Cuvi
 */

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
const { sequelize } = require('../models/Movie.model');
const { Op } = require('sequelize');

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

//GET nombre_pelciula
router.get('/nombre_pelicula/:nombre_pelicula', async (req, res) => {

    try {
        const movies = await Movie.findAll({
            where: {
                nombre_pelicula: {[Op.substring]: req.params.nombre_pelicula}
            }
        });
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

//GET  anio_estreno_pelicula
router.get('/anio_estreno_pelicula/:anio_estreno_pelicula', async (req, res) => {

    try {
        const movies = await Movie.findAll({
            where: {
                anio_estreno_pelicula: req.params.anio_estreno_pelicula
            }
        });
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

//GET  actores_pelicula
router.get('/actores_pelicula/:actores_pelicula', async (req, res) => {

    try {
        const movies = await Movie.findAll({
            where: {
                actores_pelicula: {[Op.substring]: req.params.actores_pelicula}
            }
        });
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

//GET  genero_pelicula
router.get('/genero_pelicula/:genero_pelicula', async (req, res) => {

    try {
        const movies = await Movie.findAll({
            where: {
                genero_pelicula: {[Op.substring]: req.params.genero_pelicula}
            }
        });
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
router.post('/newMovie', async (req, res) => {
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
router.put('/editMovie/:id_pelicula', async (req, res) => {
    try {
        const updateMovie = await Movie.update(
            req.body, 
            { where: 
                { id_pelicula: req.params.id_pelicula }
            }
        );

        res.status(200).json({
            status: "OK",
            msg: `Your review was succesfylly updated.` 
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
            { id_pelicula: req.params.id_pelicula }
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

module.exports = router;

//JSON.stringify(Objeto)
