'use strict'

let PathConstants = global._pathConstants;
let AppRoot = global._appRoot;

let path = require('path');
let WelcomePage = path.join(AppRoot, PathConstants.WebPages.Welcome);

function getWelcomePage(req, res) {
    res.sendFile(WelcomePage);
}

module.exports = {
    getWelcomePage: getWelcomePage
}