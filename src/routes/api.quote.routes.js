const { Router } = require('express');
const router = Router();
const quotesService = require('../services/quotes.service');

router.get('/quote', (req, res) => {
    quotesService.getQuotes()
        .then(quote => res.status(200).send(quote))
})

module.exports = router