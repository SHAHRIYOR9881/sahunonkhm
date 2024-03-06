
const asyncHandler = require('../middleware/async');
const CallbackMessage = require("../config/callback");
const GaleryModel = require("../model/galeryModel");
const NewsModel = require("../model/newModel");
const VideoModel = require("../model/videoModel");

exports.getIndex = asyncHandler(async (req, res, next) => {
    const galery_last = await GaleryModel.find().sort({ createdAt: -1 }).limit(5)
    const galery_old = await GaleryModel.find().sort({ createdAt: 1 }).limit(5)
    const news = await NewsModel.find().sort({ createdAt: -1 }).limit(3)
    const video = await VideoModel.find().sort({ createdAt: -1 }).limit(4)
    res.json(CallbackMessage.GetMessage({
        news: news,
        video: video,
        latest_five_galeries: galery_last,
        oldest_five_galeries: galery_old,
    }))
})