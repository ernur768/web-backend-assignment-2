const { Router } = require('express');
const router = Router();
const chuckNorrisService = require('../services/chuck-norris.service');

router.get('/chuckNorrisJoke', (req, res) => {
    chuckNorrisService.getJoke()
        .then(joke => res.status(200).send(joke))
})

module.exports = router