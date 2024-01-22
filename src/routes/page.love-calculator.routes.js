const {Router} = require('express');
const router = Router();

router.get('/loveCalculator', (req, res) => {
    res.render('love-calculator', {active: 'love-calculator'});
})

module.exports = router