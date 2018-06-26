'use strict'

const express = require('express');
const app = new express();

global._app = app;
global._appRoot = __dirname;
global._pathConstants = require('./app/constants/pathConstants');

const config = require(global._pathConstants.Config);
const routes = require(global._pathConstants.Routes);

if (process.env.NODE_ENV !== 'production') {
    app.set("PORT", config.development.PORT);
}
else if (process.env.PORT !== undefined) {
    app.set("PORT", process.env.PORT);
}
else {
    console.log('Error Occured...');
}

if (process.env.NODE_ENV !== 'production' || process.env.PORT !== undefined) {
    app.listen(app.get("PORT"), () => {
        console.log("Server Got Activated...");
    });
    app.use((req, res, next) => {
        console.log(req.method, req.url);
        next();
    });
    app.use(routes);
}

