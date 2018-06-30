'use strict'

const pathConstants = global._pathConstants;
const jwt = require('jsonwebtoken');
const config = require(pathConstants.Config);
const baseResModel = require(global._pathConstants.BaseResModel);
const resStatus = require(global._pathConstants.ResStatus);

exports.validateToken = async function (req, res, next) {
    try {
        const userToken = req.headers.authorization.split(' ')[1];
        const decoded = await jwt.verify(userToken, config.tokenSecret);
        next();
    } catch (error) {
        let resModel = baseResModel;
        resModel.Status = false;
        resModel.Message = 'Authorization Error';
        resModel.Data = error.message;
        res.status(resStatus.tokenFailure).send(resModel);
    }
}

exports.validatePermission = async function (req, res, next) {
    next();
}