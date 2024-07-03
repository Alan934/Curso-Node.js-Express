const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next(); //Continua hacia el ontrolador
    } catch (err) {
        res.status(403);
        res.send({ error: err.array() });
    }
};

module.exports = validateResults