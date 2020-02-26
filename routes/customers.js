const express = require('express');
const router = express.Router();
const {Customer} = require('../models/customer');

  router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
  });
  
  router.post('/', async (req, res) => {
    const customers = new Customer({ name: req.body.name });
    customers = await customers.save();
    res.send(customers);
  });
  
  router.put('/:id', async (req, res) => {
    const customers = await Customer.findByIdAndUpdate(req.params.id, {
      name : req.params.name,
      new: true
    });

    if (!customers) return res.status(404).send('The customers with the given ID was not found.');
    
    res.send(customers);
  });
  
  router.delete('/:id', async (req, res) => {
    const customers = await Customer.findByIdAndRemove(req.params.id);
    if (!customers) return res.status(404).send('The customers with the given ID was not found.');
    
    res.send(customers);
  });
  
  router.get('/:id', async (req, res) => {
    const customers = await Customer.find(req.params.id);
    if (!customers) return res.status(404).send('The customers with the given ID was not found.');
    res.send(customers);
  });


  module.exports = router;