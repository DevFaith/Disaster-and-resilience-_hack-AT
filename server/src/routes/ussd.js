var express = require('express');
const handleUSSD = require('../handlers/ussd');
var router = express.Router();

/* GET home page. */
router.post('/relay', async (req, res, next) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    console.log("Incoming", { body: req.body, query: req.query, headers: req.headers });
    if (!sessionId || !serviceCode || !phoneNumber) {
        return res.send('END Invalid option. Please try again.');
    }

    const ussd_response = handleUSSD({ text, sessionId, serviceCode, phoneNumber });
    res.send(ussd_response);
});

module.exports = router;
