'use strict'

const validator = require('express-joi-validation')({ passError: true });
const bodyParser = require('body-parser');
const express = require('express');
const app = new express();

global._app = app;
global._appRoot = __dirname;
global._pathConstants = require('./app/constants/pathConstants');

const config = require(global._pathConstants.Config);
const routes = require(global._pathConstants.Routes);
const baseResModel = require(global._pathConstants.BaseResModel);
const resStatus = require(global._pathConstants.ResStatus);
const resMessages = require(global._pathConstants.ResMessages);

if (process.env.NODE_ENV !== 'production') {
    app.set('PORT', config.development.PORT);
}
else if (process.env.PORT !== undefined) {
    app.set('PORT', process.env.PORT);
}
else {
    console.log(resMessages.errorMessage);
}

if (app.get('PORT') != undefined && app.get('PORT') != null && app.get('PORT') != '') {
    app.listen(app.get('PORT'), () => {

        /*Printing Success Response*/
        console.log(resMessages.serverActivated);

        /* Initiating Server Requirements */
        initiateServer();

    });
}
else {
    console.log(resMessages.errorMessage);
}

function initiateServer() {
    /* Getting Each Every Route Request */
    app.use((req, res, next) => {
        console.log(req.method, req.url);
        next();
    });

    /* parse application/x-www-form-urlencoded */
    app.use(bodyParser.urlencoded({ extended: false }))

    /* parse application/json */
    app.use(bodyParser.json())

    /* Initiating Server Routes */
    routes.routing(app, validator);

    /* Catching Joi Validation Error */
    app.use((err, req, res, next) => {
        if (err.error.isJoi) {
            let errorMessages = [];
            let resModel = baseResModel;
            for (let i = 0; i < err.error.details.length; i++) {
                errorMessages.push(err.error.details[i].message.toString().replace(/['"]+/g, ''));
            }
            resModel.Data = errorMessages;
            resModel.Message = resMessages.modelInvalid;
            resModel.Status = false;
            res.status(resStatus.modelInvalid).json(resModel);
        }
        else {
            next(err);
        }
    });
}