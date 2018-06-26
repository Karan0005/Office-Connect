'use strict'

const appControllers = global._pathConstants.AppControllers;
const commonController = require(appControllers.CommonController);
const authController = require(appControllers.AuthController);
const express = require('express');
const Router = new express.Router();

'************************** Common Routes **************************'

Router
    .route('/')
    .get(authController.validateToken, authController.validatePermission, commonController.getWelcomePage);

module.exports = Router;