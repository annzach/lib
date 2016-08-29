const express = require('express');
const router = express.Router();

const Library = require('../models/library');

router.route('/')
      .get((req,res)=>{
        Library.find({},(err,books)=>{
          res.status(err?400:200).send(err||books);
        })
      })

      .post((req,res)=>{
        Library.create(req.body,(err,books)=>{
         console.log(req.body);
         if(err){
          console.log("error",err);
         }
          Library.find({},(err,books)=>{
            res.status(err?400:200).send(err||books);
          }
        
          )
        })
    
      })



router.route('/lookup/:author')
      .get((req,res)=>{
          Library.find({author:req.params.author},(err,books)=>{
            if(err||!books){
              return res.status(400).send(err||'author not found')
            }
           res.send(books);
          })
      })

router.route('/lookup/title/:title')
      .get((req,res)=>{
        Library.find({title:req.params.title},(err,books)=>{
          if(err||!books){
            return res.status(400).send(err||'title not found')
          }
          res.send(books)
        })
        
      })


module.exports = router;