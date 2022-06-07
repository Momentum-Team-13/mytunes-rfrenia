
const search = document.querySelector('#searchMusic')
const display = document.querySelector('#display')
const searchButton = document.querySelector('#searchButton')
const pageElement = document.querySelector('#page')



function musicLog (itunesData) {
    console.log(itunesData)


    itunesData.map (function(song) {
        console.log ("Songs Line 11", song.trackName)

        let songElement = document.createElement('div')
        songElement.classList.add('result')
        songElement.innerText = `${song.artistName} - ${song.trackName} `
        pageElement.appendChild(songElement)

        let audioElement = document.createElement('audio')
        audioElement.src = song.previewUrl
        audioElement.alt = 'play song'
        audioElement.classList.add("audio")
        pageElement.appendChild(audioElement)
        console.log ("audio Line 26", song.previewUrl)

        let imageElement = document.createElement('img')
        imageElement.src = song.artworkUrl100
        imageElement.alt = 'photos of artist'
        imageElement.classList.add("img")
        pageElement.appendChild(imageElement)

    })
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
});

document.addEventListener('keyup', (event) => {
  if (event.key === "Enter") {
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
    }
});


function clearingDisplay(){
    displayText = '';
    operator = '';
    updateDisplayText();
  }