const {Router} = require('express');
const router = Router();

router.get('/chuckNorris', (req, res) => {
    res.render('chuck-norris', {active: 'chuck-norris'});
})

module.exports = router