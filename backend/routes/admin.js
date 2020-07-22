const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/', adminController.geAffirmations);

router.post('/add-affirmation', adminController.postAffirmations);

router.get('/:affirmationId', adminController.getAffirmation);

module.exports = router;
