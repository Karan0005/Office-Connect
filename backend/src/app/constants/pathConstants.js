'use strict'

const path = require('path');

module.exports = {
    "Config": path.join(global._appRoot + "/environment/config"),

    "AppControllers": {
        "CommonController": path.join(global._appRoot + "/app/controllers/CommonController"),
        "AuthController": path.join(global._appRoot + "/app/controllers/AuthorizeController"),
    },

    "Routes": path.join(global._appRoot + "/app/routes/routing"),

    "WebPages": {
        "Welcome": path.join(global._appRoot + "/app/webpages/welcome.html"),
        "Error": path.join(global._appRoot + "/app/webpages/error.html"),
        "NotAuthorize": path.join(global._appRoot + "/app/webpages/notAuthorize.html"),
        "NoPermission": path.join(global._appRoot + "/app/webpages/noPermission.html")
    },

    "BaseResModel": path.join(global._appRoot + "/app/models/baseResModel.js"),

    "ReqModels": {
        "AccountModel": path.join(global._appRoot + "/app/models/req_models/accountModel.js")
    },

    "ResMessages": path.join(global._appRoot + "/app/constants/resMessages.js"),

    "ResStatus": path.join(global._appRoot + "/app/constants/resStatus.js")
};