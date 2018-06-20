'use strict'

let AppControllers = global._pathConstants.AppControllers;
let AppRoot = global._appRoot;

let express = require('express');
let app = new express();

let path = require('path');
let CommonController = require(path.join(AppRoot, AppControllers.CommonController));

app.get('/', CommonController.getWelcomePage);
