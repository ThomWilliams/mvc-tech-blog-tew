const express = require("express");
const router = express.Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");
const app = express();


// CREATE A Blog Post
router.post("/", withAuth, async (req, res) => {
    try {
        const { 
            blog_title, 
            blog_content
        } = req.body;

        const payload = Object.assign(
        {
            user_id: req.session.user_id,
        },
        {
            blog_title: blog_title,
            blog_content: blog_content

        });
        const newBlog = await Blog.create(payload);

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});


// UPDATE A Blog Posts by the user (app.put method) // edit-blog/:id





// DELETE A Blog Posts by the user (app.put method) // edit-blog/:id

router.delete('/blog/:id', withAuth, async (req, res) => {
    console.log("Deleting")
    try {
        const [affectedRows] = await Blog.destroy({
           where: {
               id: req.params.id
           }
        });
        if (affectedRows) {

            res.status(200).end();
        }
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;