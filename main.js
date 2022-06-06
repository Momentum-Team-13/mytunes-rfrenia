
const search = document.querySelector('#searchMusic')
const display = document.querySelector('#display')
const searchButton = document.querySelector('#searchButton')

function musicLog (itunesData) {
    console.log(itunesData)
    for (let term of itunesData) {
console.log(term)
display.textContent = `"test" ${itunesData.results.kind}`
    }

}

searchButton.addEventListener('click', (event) => {
console.log(search.value)
const userInput = search.value
let exchangeUrl = `https://itunes.apple.com/search?term=${userInput}`;

fetch(exchangeUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json' }
})

.then(function (response) {
    return response.json()
})
.then(function (data){
    console.log("Response from exchange API: ", data)
    musicLog(data.results)
})
//display.textContent = `"test" ${data.results[0]}`


});
