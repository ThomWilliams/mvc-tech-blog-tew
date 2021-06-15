// HTML ROUTES

const router = require("express").Router();
const { Blog, User } = require('../models')
const withAuth = require("../utils/auth")



// HOMEPAGE: ALL-BLOGS - get request to get all the blog posts and display

router.get("/", async (req, res) => {

    // Joins blog with user data
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });
    
       //  serializes data for template to read
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        // passes serialized data + session into template
     res.render("all-blogs", {
        blogs,
        logged_in: req.session.logged_in
        });
     } catch (err) {
        res.status(500).json(err);

    }
});

// 

// SINGLE-BLOG get request to view a single post using an id 

router.get("/single-blog/:id", async (req, res) => {

    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        //  serializes data for template to read
        const blog = blogData.get({ plain: true });

        // passes serialized data + session into template
        res.render("single-blog", {
            ...blog,
             logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
        }

});

// EDIT-BLOG (ONE) - uses withAuth Middleware to prevent non-users from accessing

router.get("/edit-blog/:id", withAuth, async (req, res) => {
    // find logged in user by ID
    try {
        const userData = await User.findByPk(req.params.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });
        //  serializes data for template to read
        const user = userData.get({ plain: true });

        // passes serialized data + session into template
        res.render("edit-blog", {
            ...user,
             logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
        }

});


// CREATE NEW BLOG - uses withAuth Middleware to prevent non-users from accessing

router.get("/new-blog", withAuth, async (req, res) => {
    // find logged in user by ID
    try {
        const userData = await User.findByPk(req.params.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });
        //  serializes data for template to read
        const user = userData.get({ plain: true });

        // passes serialized data + session into template
        res.render("new-blog", {
            ...user,
             logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
        }
});


// ALL BLOGS ADMIN PAGE - uses withAuth Middleware to prevent non-users from accessing

router.get("/all-blogs-admin", withAuth, async (req, res) => {
    // find logged in user by ID
    try {
        const userData = await User.findByPk(req.params.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });
        //  serializes data for template to read
        const user = userData.get({ plain: true });

        // passes serialized data + session into template
        res.render("all-blogs-admin", {
            ...user,
             logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
        }
});


// LOGIN - get /login will render a login page
router.get("/login", (req, res) => {
    // if user is logged in - redirect to all-blogs page
    if (req.session.logged_in) {
        res.redirect("/all-blogs");
        return
    }

    // renders login page
    res.render("login");
});


// SIGNUP - get /signup will render a signup page
router.get('/signup', (req,res) => {
    if(req.session.logged_in) {
        res.redirect("/");
        return;
    }
    // corresponds with signup.handlebars
    res.render('signup')
})



// DASHBOARD - PREVENT ROUTE ACCESS USING WITHAUTH MIDDLEWARE
router.get("/dashboard", withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });
    
       //  serializes data for template to read
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

      // passes data into homepage handlebars template
      res.render('dashboard', {
          blogs,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;
