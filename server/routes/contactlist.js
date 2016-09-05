const express = require('express');
const router = express.Router();
const ContactList = require('../models/contactlist');

router.route('/')
      .get((req,res)=>{
        ContactList.find({})
        .then(contactlist =>res.send(contactlist))
        .catch(err => res.status(400).send(err))
      })
       .post((req,res)=>{
        ContactList.create(req.body)
        .then(contactlist =>res.send(contactlist))
        .catch(err => res.status(400).send(err))
      })



router.route('/:id')
      .get((req,res)=>{
        ContactList.findOne(req.params.id)
        .then(contactlist =>res.send(contactlist))
        .catch(err => res.status(400).send(err))
      })
       .delete((req,res)=>{
        ContactList.findByIdAndRemove(req.params.id)
        .then(contactlist =>res.send(req.params.id))
        .catch(err => res.status(400).send(err))
      })
        .put((req,res)=>{
        ContactList.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        .then(contactlist =>res.send(contactlist))
        .catch(err => res.status(400).send(err))
      })






module.exports = router;
