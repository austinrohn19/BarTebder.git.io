const router = require('express').Router();
const auth = require("./authController")
router.post('/api/auth/signup', (req, res) => {
    auth.registerUser(req, res)
});
module.exports = router;
