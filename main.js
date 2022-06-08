const pageElement = document.querySelector('#page')
const search = document.querySelector('#searchMusic')
const noResults = document.querySelector('#display')
const searchButton = document.querySelector('#searchButton')
const audioElement = document.querySelector('audio')
const imageDisplay = document.querySelector('#imgHeader')
const textHeader = document.querySelector('#textHeader')


function musicLog (itunesData) {
    console.log(itunesData)
    const displayElement = document.querySelector('#display')
    
    //clear results for new searches
    displayElement.innerHTML = ''

    itunesData.map (function(song) {
        console.log ("Songs Line 16", song.trackName)

        let songElement = document.createElement('div')
        songElement.classList.add('result')

        //display artist name and song name from search
        let textElement = document.createElement('div')
        textElement.innerText = `Artist: ${song.artistName} \n Song: "${song.trackName}" `
        songElement.appendChild(textElement)

        //display artwork from search
        let imageElement = document.createElement('img')
        imageElement.src = song.artworkUrl100
        imageElement.alt = 'photos of artist'
        imageElement.classList.add('img')
        songElement.appendChild(imageElement)
        console.log ("photo line 30", song.artworkUrl100)

        displayElement.appendChild(songElement)

        //play music when artwork is clicked
        imageElement.addEventListener('click', (event) => {
        if (audioElement.src !== song.previewUrl) {
            imageDisplay.src = song.artworkUrl100
            audioElement.src = song.previewUrl
            audioElement.controls = true
            textHeader.innerText = `${song.artistName} - ${song.trackName}`
        }

        //pause audio when artwork is clicked
        if (audioElement.paused) {
        audioElement.play()
        } else {
        audioElement.pause()
        }
        })
    })
}

//use the mouse click key to submit search
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
    .then(function (data) {
    console.log("Response from exchange API: ", data)
    musicLog(data.results)

        if ( data.results < 1) {
            let noResultsElement = document.createElement('div')
            noResults.innerText = "No Results"
            console.log(noResultsElement.innerText)
        } 
    })

    .catch(err => {
        window.alert("search error")
        console.error(err);
    })
});

//use the "enter" key to submit search
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
        if ( data.results < 1) {
            let noResultsElement = document.createElement('div')
            noResults.innerText = "No Results"
            console.log(noResultsElement.innerText)
        }
    }) 
    .catch(err => {
        window.alert("search error")
        console.error(err);
    })
    }
})