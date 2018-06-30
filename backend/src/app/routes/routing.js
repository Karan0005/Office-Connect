'use strict'

const appControllers = global._pathConstants.AppControllers;
const commonController = require(appControllers.CommonController);
const authController = require(appControllers.AuthController);
const accountController = require(appControllers.AccountController);

const reqModels = global._pathConstants.ReqModels;
const accountModel = require(reqModels.AccountModel);

exports.routing = function (app, validator) {

    /*************************** Common Routes ***************************/

    app.get('/', commonController.getWelcomePage)
    app.post('/signIn', validator.body(accountModel.signIn), accountController.signIn)
    app.post('/signUp', authController.validateToken, validator.body(accountModel.signIn), accountController.signIn)
}