const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth')


// CREATE A Blog Post
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});


// READ One Blog Post by User (app.get - see homeroutes)

// READ All Blog Posts by User (app.get - see homeroutes)


// UPDATE A Blog Posts by the user (app.put method) // edit-blog/:id




// Delete a blog post by the user

router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No Blog found'})
        return;
        }

        res.status(200).json(blogData);
    }   catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;