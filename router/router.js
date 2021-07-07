const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Auth = require('./router-helper');
const restricted = require('../middleware/restricted');


router.post('/register', (req, res) => {
    let user = req.body;
    const hash =  bcrypt.hashSync(user.password, 4);
    user.password = hash;

    Auth.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error)
        });
});

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Auth.findBy({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                res.status(200).json({message: `Welcome to the Jurassic Park ${user.username}`})
            } else {
                res.status(401).json({ message: `Ah, ah, ah, those aren't the right credentials`})
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.get('/users',  (req, res)=>{
    Auth.find()
        .then(users => {
            res.json(users);
        })
        .catch(error => res.send(error));
})


module.exports = router; 
