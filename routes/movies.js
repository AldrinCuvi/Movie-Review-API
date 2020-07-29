/**
 * Movie model
 * @author Aldrin Cuvi
 */

const express = require('express');
const router = express.Router();
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
            req.body, 
            { where: 
                { id_pelicula: req.params.id_pelicula }
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
