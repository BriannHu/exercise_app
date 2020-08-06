const router = require('express').Router();
let AerobicExercise = require('../../models/exercise_types/aerobic.model');

// default view
router.route('/').get((req, res) => {
    AerobicExercise.find()
    .then(aerobic_exercises => res.json(aerobic_exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add new exercise
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const activity = req.body.activity;
    const duration = Number(req.body.duration);
    const distance = Number(req.body.distance);
    const location = req.body.location;
    const date = Date.parse(req.body.date);

    const newAerobicExercise = new AerobicExercise({
        username, activity, duration, distance, location, date
    });

    newAerobicExercise.save()
    .then(() => res.json('Aerobic exercise successfully added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// view specific exercise
router.route('/:id').get((req, res) => {
    AerobicExercise.findById(req.params.id)
    .then(aerobic_exercise => res.json(aerobic_exercise))
    .catch(err => res.json('Error: ' + err));
});

// delete specific exercise
router.route('/:id').delete((req, res) => {
    AerobicExercise.findByIdAndDelete(req.params.id)
    .then(aerobic_exercise => res.json('Exercise deleted'))
    .catch(err => res.json('Error: ' + err));
});

// update specific exercise
router.route('/update/:id').post((req, res) => {
    AerobicExercise.findById(req.params.id)
    .then(aerobic_exercise => {
        aerobic_exercise.username = req.body.username;
        aerobic_exercise.activity = req.body.activity;
        aerobic_exercise.duration = Number(req.body.duration);
        aerobic_exercise.distance = Number(req.body.distance);
        aerobic_exercise.location = req.body.location;
        aerobic_exercise.date = Date.parse(req.body.date);

        aerobic_exercise.save()
        .then(() => res.json('Aerobic exercise updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.json('Error: ' + err));
});

module.exports = router;