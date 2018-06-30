'use strict'

exports.production = {
    "PORT": "8080"
}

exports.development = {
    "PORT": "8011"
}

exports.tokenSecret = "OfficeConnect!@#123";
exports.tokenExpTime = 60 * 60 * 60;
exports.tokenAlgorithm = 'HS256';