const express = require('express');
const app = express();
const router = express.Router();
const newsController = require('../app/Controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;