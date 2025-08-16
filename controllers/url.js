const { timeStamp } = require('console');
const User = require('../models/url');
const shortid = require('shortid');


async function handleGenerateShortUrl(req, res){
        const body = req.body;

        if(!body.url){
            res.json({error : "url is required"});
        }

        const shortId = shortid();

        const result = await User.create({
            shortUrl : shortId,
            redirectUrl : body.url,
            visitHistory : [],
        });

        return res.json({id : shortId});
}

async function handleGetAnalytics(req , res){
    const shortId = req.params.shortId;
    const result = await User.findOne({shortUrl : shortId});
    return res.json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory,
    });
}

async function handleTotalVisits(req , res){
        const body = req.body;
        const shortId = req.params.shortId;
        const result = await User.findOneAndUpdate(
        {
            shortUrl : shortId,
        },
        {
            $push : {
                visitHistory : {
                timeStamp : Date.now(),
            }
        }
        },
        
    );
    return res.redirect(result.redirectUrl);
}


module.exports = {
    handleGenerateShortUrl,
    handleGetAnalytics,
    handleTotalVisits,
}