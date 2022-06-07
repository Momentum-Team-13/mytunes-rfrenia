const pageElement = document.querySelector('#page')
const search = document.querySelector('#searchMusic')
const displayElement = document.querySelector('#display')
pageElement.appendChild(displayElement)
const searchButton = document.querySelector('#searchButton')

//document.getElementById("audio").control = true

function musicLog (itunesData) {
    console.log(itunesData)

 displayElement.innerHTML = ''
    itunesData.map (function(song) {
        console.log ("Songs Line 14", song.trackName)

        let songElement = document.createElement('div')
        songElement.classList.add('result')
        songElement.innerText = `${song.artistName} - ${song.trackName} `
        displayElement.appendChild(songElement)

        let imageElement = document.createElement('img')
        imageElement.src = song.artworkUrl100
        imageElement.alt = 'photos of artist'
        imageElement.classList.add('img')
        displayElement.appendChild(imageElement)
        console.log ("photo line 26", song.artworkUrl100)

        let audioElement = document.createElement('audio')
        audioElement.controls = true
        audioElement.src = song.previewUrl
        audioElement.alt = 'play song'
        audioElement.classList.add('audio')
        displayElement.appendChild(audioElement)
        console.log ("audio Line 33", song.previewUrl)

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