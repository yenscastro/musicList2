const renderSongDetail = async () => {
  try {
    // Get song ID from URL
    const pathParts = window.location.pathname.split('/')
    const requestedID = parseInt(pathParts[pathParts.length - 1])
    
    const response = await fetch('/songs')
    const data = await response.json()
    
    const mainContent = document.getElementById('song-content')
    
    if (!data) {
      mainContent.innerHTML = '<h2>No Songs Available 😞</h2>'
      return
    }
    
    const song = data.find(song => song.id === requestedID)
    
    if (!song) {
      window.location.href = '../404.html'
      return
    }
    
    // Create detail view
    const detailContainer = document.createElement('div')
    detailContainer.className = 'song-detail-container'
    
    // Image/Album Art section
    const imageContainer = document.createElement('div')
    imageContainer.className = 'album-art-container'
    
    const image = document.createElement('img')
    image.src = song.image
    image.alt = `${song.title} album art`
    image.className = 'album-art'
    
    imageContainer.appendChild(image)
    
    // Details section
    const detailsDiv = document.createElement('div')
    detailsDiv.className = 'song-info'
    
    const title = document.createElement('h2')
    title.textContent = song.title
    title.id = 'title'
    
    const artist = document.createElement('p')
    artist.innerHTML = `<strong>Artist:</strong> ${song.artist}`
    artist.id = 'artist'
    
    const album = document.createElement('p')
    album.innerHTML = `<strong>Album:</strong> ${song.album}`
    album.id = 'album'
    
    const year = document.createElement('p')
    year.innerHTML = `<strong>Year:</strong> ${song.year}`
    year.id = 'year'
    
    const genre = document.createElement('p')
    genre.innerHTML = `<strong>Genre:</strong> ${song.genre}`
    genre.id = 'genre'
    
    const duration = document.createElement('p')
    duration.innerHTML = `<strong>Duration:</strong> ${song.duration}`
    duration.id = 'duration'
    
    const description = document.createElement('p')
    description.innerHTML = `<strong>About this song:</strong> ${song.description}`
    description.id = 'description'
    
    const submittedBy = document.createElement('p')
    submittedBy.innerHTML = `<strong>Submitted by:</strong> ${song.submittedBy} on ${song.submittedOn}`
    submittedBy.id = 'submittedBy'
    submittedBy.className = 'submitted-info'
    
    // Add a "Back to list" button
    const backButton = document.createElement('a')
    backButton.textContent = '← Back to Song List'
    backButton.href = '/'
    backButton.setAttribute('role', 'button')
    backButton.className = 'secondary'
    
    detailsDiv.appendChild(title)
    detailsDiv.appendChild(artist)
    detailsDiv.appendChild(album)
    detailsDiv.appendChild(year)
    detailsDiv.appendChild(genre)
    detailsDiv.appendChild(duration)
    detailsDiv.appendChild(description)
    detailsDiv.appendChild(submittedBy)
    detailsDiv.appendChild(backButton)
    
    detailContainer.appendChild(imageContainer)
    detailContainer.appendChild(detailsDiv)
    
    mainContent.appendChild(detailContainer)
    
    // Update page title
    document.title = `${song.title} by ${song.artist} - Music Listicle`
    
  } catch (error) {
    console.error('Error fetching song details:', error)
    document.getElementById('song-content').innerHTML = '<h2>Error loading song details. Please try again.</h2>'
  }
}

renderSongDetail()