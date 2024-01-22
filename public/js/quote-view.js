const button = document.querySelector('button');
const result = document.getElementById('result')

button.addEventListener('click', () => {
    fetch('http://localhost:3000/api/quote')
        .then(res => res.json())
        .then(({quote, author}) => {
            result.innerText =
                `${quote}\nAuthor: ${author}`
        })
})
