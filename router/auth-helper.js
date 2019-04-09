

const db = require('../data/dbConfig')

module.exports = {

    add: async function(user){
        const [id] = await db('users').insert(user)
        return this.findById(id);
    },

    find: function(){
        return db('users').select('id', 'username', 'password');
    },

    findBy: function(filter){
        return db('user').where(filter);
    },

    findById: function(id){
        return db('users')
        .where({id})
        .first()
    }

}

