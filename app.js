const config = require('config')
const express = require('express')
const path = require('path')

const pageWeatherRouter = require('./src/routes/page.weather.routes')
const pageQuoteRouter = require('./src/routes/page.quote.routes')
const pageLoveCalculatorRouter = require('./src/routes/page.love-calculator.routes')
const apiWeatherRouter = require('./src/routes/api.weather.routes')
const apiQuotesRouter = require('./src/routes/api.quote.routes')

const app = express()

app.use(express.static('public')) // TODO: test this
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'src', 'views', 'pages'))

app.use('/', pageWeatherRouter)
app.use('/', pageQuoteRouter)
app.use('/', pageLoveCalculatorRouter)
app.use('/api', apiWeatherRouter)
app.use('/api', apiQuotesRouter)

const port = process.env.PORT || config.get('port')

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
