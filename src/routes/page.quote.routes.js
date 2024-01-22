const {Router} = require('express');
const router = Router();

router.get('/quote', (req, res) => {
    res.render('quote', {active: 'quote'});
})

module.exports = router