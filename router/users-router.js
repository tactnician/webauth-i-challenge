const router = require('express').Router();

const Users = require('./users-helper');
const restricted = require('../middleware/restricted');

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
