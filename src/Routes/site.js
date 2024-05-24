const express = require('express');
const router = express.Router();
const SiteController = require('../app/Controllers/SiteController');

router.use('/search', SiteController.show);
router.use('/', SiteController.index);

module.exports = router;