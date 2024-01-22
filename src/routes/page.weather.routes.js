const {Router} = require('express');
const router = Router();

router.get('/weather', (req, res) => {
    res.render('weather', {active: 'weather'});
})

module.exports = router