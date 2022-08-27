const router = require('express').Router();
const auth = require("./authController")
router.post('/api/auth/signup', (req, res) => {
    auth.registerUser(req, res)
});
router.post('/api/auth/signin', (req, res, next) => {
    auth.loginUser(req, res, next)
});
module.exports = router;
