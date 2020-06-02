const auth = require('../middleware/auth');
const validateObjectId = require('../middleware/validateObjectId');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();
const {Genre} = require('../models/genre');


  router.get('/', async (req, res) => {
    throw new Error('Could nor get the genres');
    const genres = await Genre.find().sort('name');
      res.send(genres);
  });
  
  router.post('/', auth, async (req, res) => {
    const genre = new Genre({ name: req.body.name });
    genre = await genre.save();
    res.send(genre);
  });
  
  router.put('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndUpdate(req.params.id, {
      name : req.params.name,
      new: true
    });

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    
    res.send(genre);
  });
  
  router.delete('/:id', [auth, admin], async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    
    res.send(genre);
  });
  
  router.get('/:id', validateObjectId,async (req, res) => {
    const genre = await Genre.find(req.params.id);
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
  });


  module.exports = router;