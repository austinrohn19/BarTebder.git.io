const express = require('express')
const router = express.Router();

const {} = require('');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/').get();

router.route('').post();

router.route('').put()
    .
router.route('/').delete();

module.exports = router;