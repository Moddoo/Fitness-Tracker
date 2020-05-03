const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../models')

router
   .route(['/', '/range', '/:id'])

   .get((req,res) => {
       db.Workout
            .find()
            .then(data => res.status(200).json(data))
            .catch(err => {
                if(err) throw err;
                res.status(400).json(err)
          })
    })

    .post(({ body },res) => {
        db.Workout
             .create(body)
             .then(data => res.status(200).json(data))
             .catch(err => {
                if(err) throw err;
                res.status(400).json(err)
             })
    })

    .put((req,res) => {
    db.Workout.update({
        _id: mongoose.Types.ObjectId(req.params.id)
    },
    {
        $push: {
            exercises: req.body
        }       
    },
    {
        new: true
    })
    .then(updated => res.status(200).json(updated))
    .catch(err => {
        if(err) throw err;
        res.status(400).json(err)
    })
})    


module.exports = router;