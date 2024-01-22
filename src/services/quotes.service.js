const normalizeQuoteData = (data) => ({
    quote: data.quote,
    author: data.author,
})

const QuotesService = {
    getQuotes: async () => {
        const fetchOptions = {
            method: 'GET',
            headers: {
                'X-Api-Key': 'dAB+R52neK6shm4WdwriJg==rry9YwuzLnXSKg9C'
            }
        }

        const res = await fetch('https://api.api-ninjas.com/v1/quotes', fetchOptions)
        const data = await res.json()
        return normalizeQuoteData(data[0])
    }
}

module.exports = QuotesService