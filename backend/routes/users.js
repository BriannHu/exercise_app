const router = require('express').Router()
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);

    const newUser = new User({
        username,
        age,
        gender,
        weight,
        height
    });

    newUser.save()
    .then(() => res.json('User successfully added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;