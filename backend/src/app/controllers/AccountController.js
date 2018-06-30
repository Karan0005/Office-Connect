'use strict'

const pathConstants = global._pathConstants;
const config = require(pathConstants.Config);
const baseResModel = require(pathConstants.BaseResModel);
const jwt = require('jsonwebtoken');

exports.signIn = async function (req, res) {
    const token = await jwt.sign({ Data: 'Karan Gupta' }, config.tokenSecret, { algorithm: config.tokenAlgorithm, expiresIn: config.tokenExpTime });
    res.send(token);
}

exports.signUp = async function (req, res) {

}