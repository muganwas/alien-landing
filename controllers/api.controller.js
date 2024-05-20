const router = express.Router();
const path = require('path');
const { contact } = require('../models/main.model');

router.post('/api/contact', function (req, res, next) {
    try {
        return res.json(contact({ username: req.body.username, email: req.body.email, message: req.body.message }));
    } catch (e) {
        return next(e.message);
    }
});

module.exports = router;