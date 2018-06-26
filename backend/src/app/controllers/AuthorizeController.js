'use strict'

const pathConstants = global._pathConstants;
const notAuthorizePage = pathConstants.WebPages.NotAuthorize;

exports.validateToken = function(req, res, next){
    next();
}

exports.validatePermission = function(req, res, next){
    next();
}