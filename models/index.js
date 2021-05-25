const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Post, {
    foreignKey: 'user_id',

});

Post.belongsTo(User, {
    foreignKey: 'user_id',
})

Post.hasMany(Comments, {
foreignKey: 'user_id',
});

module.exports = { User, Post, Comments };

