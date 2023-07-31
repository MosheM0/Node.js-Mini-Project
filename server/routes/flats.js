const db = require('../db.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.json(db.getAllFlats());
    }
    catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
});

router.get('/:id', (req, res) => {

    try {

        res.json(db.getFlatByID(req.params.id));
    }
    catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
});

router.post('/', (req, res) => {
    try {
        const { streetName, streetNumber, city } = req.body;
        db.insertFlat(streetName, Number(streetNumber), city);
        res.status(201).send(`flat ${streetName} ${city} was inserted successfuly`);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
});

router.delete('/:id', (req, res) => {
    try {
        const flatID = req.params.id;
        const updatedFlats = db.deleteFlatById(flatID);
        res.send(updatedFlats);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
})

module.exports = router;