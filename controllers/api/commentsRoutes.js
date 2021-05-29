const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth')


// CREATE A Comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comments.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


// READ All comments Post by User (app.get - see homeroutes)


// UPDATE / edit a Posts by the user (app.put method) // edit-blog/:id




// Delete a comments by the user

router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comments.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No Blog found'})
        return;
        }

        res.status(200).json(blogData);
    }   catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;