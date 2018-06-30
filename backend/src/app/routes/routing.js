'use strict'

const appControllers = global._pathConstants.AppControllers;
const commonController = require(appControllers.CommonController);
const authController = require(appControllers.AuthController);

const reqModels = global._pathConstants.ReqModels;
const accountModel = require(reqModels.AccountModel);

exports.routing = function (app, validator) {
    
    /*************************** Common Routes ***************************/
    
    app.get('/', authController.validateToken, authController.validatePermission, commonController.getWelcomePage)
    app.post('/signIn', authController.validateToken, authController.validatePermission, validator.body(accountModel.signIn), commonController.getWelcomePage)
}