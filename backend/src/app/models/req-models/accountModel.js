const Joi = require('joi');

exports.signIn = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
}

// exports.accountModel = Joi.object({
//     username: Joi.string().alphanum().min(3).max(30).required(),
//     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
// })