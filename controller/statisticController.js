
const MyClass = require("../config/class")
const asyncHandler = require('../middleware/async');
const CallbackMessage = require("../config/callback");

const GaleryModel = require("../model/galeryModel");
const NewsModel = require("../model/newModel");
const OrganizationStructureModel = require("../model/organizationStructureModel");
const ProjectModel = require("../model/projectModel");
const RegionalBorder = require("../model/regionalBorderModel");
const StaffModel = require("../model/staffModel");
const VactinationModel = require("../model/vactinationModel");
const VideoModel = require("../model/videoModel");
const UserModel = require("../model/userModel");


exports.getStatistic = asyncHandler(async (req, res, next) => {
    const galery = await GaleryModel.find().countDocuments()
    const news = await NewsModel.find().countDocuments()
    const organization = await OrganizationStructureModel.find().countDocuments()
    const project = await ProjectModel.find().countDocuments()
    const regional_border = await RegionalBorder.find().countDocuments()
    const staff = await StaffModel.find().countDocuments()
    const vactination = await VactinationModel.find().countDocuments()
    const video = await VideoModel.find().countDocuments()
    const user = await UserModel.find().countDocuments()
    res.json({
        galery: galery,
        news: news,
        organization: organization,
        project: project,
        regional_border: regional_border,
        staff: staff,
        vactination: vactination,
        video: video,
        user: user,
    })
})