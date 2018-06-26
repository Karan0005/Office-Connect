'use strict'

const pathConstants = global._pathConstants;
const welcomePage = pathConstants.WebPages.Welcome;

exports.getWelcomePage = function (req, res) {
    res.sendFile(welcomePage);
}