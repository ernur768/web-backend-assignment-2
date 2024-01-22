const button = document.querySelector('button');
const result = document.getElementById('result')

button.addEventListener('click', () => {
    fetch('http://localhost:3000/api/chuckNorrisJoke')
        .then(res => res.json())
        .then(({joke}) => {
            result.innerText = `${joke}`
        })
})
