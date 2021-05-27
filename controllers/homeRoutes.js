// get request to get all the blog posts and display

const router = require("./api/dashboardRoutes");

// get request to view a single post using an id 

// get /login will render a login page

// get /signup will render a signup page
router.get('/signup', (req,res) => {
    if(req.session.logged_in) {
        res.redirect("/");
        return;
    }
    // corresponds with signup.handlebars
    res.render('signup')
})


// TO DO 

// ROUTES 
// HOMEPAGE > BLOGS > COMMENTS > LOGIN