const Joi = require('joi');


const registerValidation = (data) => {
    const schema = Joi.object({
        fullname: Joi.string().min(3).max(30).required(),
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        repeat_password: Joi.ref('password'),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        gender: Joi.string().required(),
        phone: Joi.string().min(2).required(),
        dob: Joi.number().integer().min(1900).max(2005),
        country: Joi.string().required(),
    })

    return schema.validate(data)

}



module.exports = {registerValidation}