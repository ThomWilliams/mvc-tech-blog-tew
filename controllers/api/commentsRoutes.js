const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth')


// CREATE A comment
router.post("/", withAuth, async (req, res) => {
    try {
        const { 
            commentContent, 
        } = req.body;

        const payload = Object.assign(
        {
            user_id: req.session.user_id,
        },
        {
            comment_content: commentContent,
        });
        const newComment = await Comments.create(payload);

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});



// READ All comments Posted by User (app.get - see homeroutes)

router.get("/", async (req, res) => {

    // Joins comments with user data
    try {
        const commentsData = await Comments.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });
    
       //  serializes data for template to read
        const comments = commentsData.map((comments) => comments.get({ plain: true }));

        // passes serialized data + session into template
     res.render("comments", {
        comments,
        logged_in: req.session.logged_in
        });
     } catch (err) {
        res.status(500).json(err);

    }
});

module.exports = router;