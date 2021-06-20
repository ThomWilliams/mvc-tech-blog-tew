const express = require("express");
const router = express.Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");
const app = express();


// CREATE A Blog Post
router.post("/", withAuth, async (req, res) => {
    try {
        const { 
            blogTitle, 
            blogContent
        } = req.body;

        const payload = Object.assign(
        {
            user_id: req.session.user_id,
        },
        {
            blog_title: blogTitle,
            blog_content: blogContent

        });
        const newBlog = await Blog.create(payload);

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});


// UPDATE A Blog Posts by the user (app.put method) // edit-blog/:id

router.put('/:id', withAuth, async (req, res) => {
    try {
        const editBlog = await Blog.update({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(editBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});


// Delete a blog post by the user

router.delete('/blog/:id', async (req, res) => {
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


// READ One Blog Post by User (app.get - see homeroutes)

// READ All Blog Posts by User (app.get - see homeroutes)


module.exports = router;