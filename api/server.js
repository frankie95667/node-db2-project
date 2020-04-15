const express = require('express');
const server = express();
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const NODE_ENV = "development";

const db = knex(knexConfig[NODE_ENV]);

server.use(express.json());
server.use('/api/cars', router);

router.get('/', (req, res) => {
    db('cars')
    .then(cars => res.status(200).json(cars))
    .catch(err => res.status(500).json({errorMessage: "Something went wrong"}));
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    db('cars').where({id}).first()
    .then(car => {
        if(car){
            res.status(200).json(car)
        } else {
            res.status(400).json({message: "Car not found in database"})
        }
    })
    .catch(err => res.status(500).json({errorMessage: "Something went wrong"}));
})

router.post('/', (req, res) => {
    const car = req.body;
    if(car.vin && car.make && car.model && car.mileage){
        db('cars').insert(car, "id")
        .then(id => db("cars").where({id: id[0]}).first())
        .then(car => res.status(200).json(car))
        .catch(err => res.status(500).json({errorMessage: "Something went wrong"}));
    } else {
        res.status(400).json({message: "vin, make, model, and mileage properties are required"})
    }
})

module.exports = server;