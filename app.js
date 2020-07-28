/**
 * Movie model
 * @author Aldrin Cuvi
 */

const express = require('express');

//Database connection
const dataBase = require('./config/data_base');
 
//Database authentication
dataBase.authenticate()
    .then(() => console.log('Connected to database'))
    .catch(err => console.log('ERROR: ' + err));

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

//Movie routes
app.use('/movies', require('./routes/movies'))

//Port connection
const PORT = process.env.PORT || 5432;
app.listen(PORT, console.log(`Server started on ${PORT}`));





