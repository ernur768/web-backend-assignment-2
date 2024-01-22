const {Router} = require('express');
const weatherService = require('../services/weather.service');
const router = Router();

router.get('/weather', (req, res) => {
    const { city } = req.query

    if (!city) {
        res.status(400).send('city parameter is missing')
        return
    }

    weatherService.getData(city)
        .then(data => res.status(200).send(data))
})

module.exports = router