const chuckNorrisService = {
    getJoke: async () => {
        const url = 'https://api.chucknorris.io/jokes/random'
        const res = await fetch(url)
        const { value } = await res.json()
        return {joke: value}
    }
}

module.exports = chuckNorrisService;