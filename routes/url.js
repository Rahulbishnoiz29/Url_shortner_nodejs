
const express = require('express');
const router = express.Router();
const {handleGenerateShortUrl,
       handleGetAnalytics,
       handleTotalVisits
} = require('../controllers/url');


router.post('/',handleGenerateShortUrl);
router.get('/analytics/:shortId',handleGetAnalytics);
router.get('/:shortId',handleTotalVisits);

module.exports = router;