const express = require("express");
const router = express.Router()

const {validateToken} = require('./app.middleware')

const {
    getAllItems,
    getAccessToken
} = require('./controller')

router.route('/auth').post(getAccessToken);
router.route('/').get(validateToken, getAllItems);

module.exports = router