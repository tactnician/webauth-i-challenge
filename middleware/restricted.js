
module.exports = (req, res, next) => {
    try {
        if (req.session && req.session.user){
            next()
        } else {
            res.status(401).json({message: `You shall not pass`})
        }
        } catch (error) {
        res.status(500).json({message:`error`};)
        }
    
};


// const Auth = require('../router/router-helper')

// function restricted(req, res, next) {
//     const {username, password} = req.headers;
    
//         if(username && password) {
//         Auth.findBy({username})
//         .first()
//         .then(user => {
//             if (user && bcrypt.compareSync(password, user.password)) {
//             next()
//             } else {
//             res.status(401).json({message: 'Invalid Credentials'})
//             }
//         }).catch(error => {
//             console.log(error)
//             res.status(500).json({
//                 message: 'Something went wrong on our end.', error: error
//             })
//         })
//         } else {
//             res.status(400).json({message: 'No credentials provided.'})
//         } 
// }

// module.exports = restricted;