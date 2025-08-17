
const express = require('express');
const router = express.Router();
const {handleGenerateShortUrl,
       handleGetAnalytics,
       handleTotalVisits,
       handleHomeRoute
                       } = require('../controllers/url');

router.get('/',handleHomeRoute);
router.post('/',handleGenerateShortUrl);
router.get('/analytics/:shortId',handleGetAnalytics);
router.get('/:shortId',handleTotalVisits);

module.exports = router;