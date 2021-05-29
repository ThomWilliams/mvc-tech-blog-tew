// handles custom routes and those that handle CRUD operations


const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
try {
    const userData = await User.create(req.body);

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;

        res.status(200).json(userData);

    });

} catch (err) {
    res.status(400).json(err);
}
});


// login with username and password
router.post('/login', async (req, res) => {

    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        
        if (!userData) {
            res.status(400).json({ message: 'Sorry, unrecognised username or password'});
        return;
        }
        
        const correctPassword = await userData.checkPassword(req.body.password);
    
        if (!correctPassword) {
            res.status(400).json({ message: 'Sorry, unrecognised username or password'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'login successful!'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// logout User
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

module.exports = router;


