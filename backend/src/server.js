'use strict'

global._pathConstants = require('./app/constants/path_constant');
global._appRoot = __dirname;

let path = require('path');
let config = require(path.join(global._appRoot, global._pathConstants.Config));

require('../src/app/routes/routing');

