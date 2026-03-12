const renderSongs = async () => {
  try {
    const response = await fetch('/songs')
    const data = await response.json()
    
    const mainContent = document.getElementById('main-content')
    
    if (!data || data.length === 0) {
      mainContent.innerHTML = '<h2>No Songs Available 😞</h2>'
      return
    }
    
    // Clear any existing content
    mainContent.innerHTML = ''
    
    // Add page title
    const pageTitle = document.createElement('h2')
    pageTitle.textContent = 'Iconic Songs Through History'
    pageTitle.className = 'page-title'
    mainContent.appendChild(pageTitle)
    
    // Create grid container
    const grid = document.createElement('div')
    grid.className = 'grid'
    
    data.forEach(song => {
      const card = document.createElement('article')
      card.className = 'song-card'
      
      // Top container for image/album art
      const topContainer = document.createElement('div')
      topContainer.className = 'top-container'
      topContainer.style.backgroundImage = `url(${song.image})`
      topContainer.style.backgroundSize = 'cover'
      topContainer.style.backgroundPosition = 'center'
      topContainer.style.height = '200px'
      
      // Bottom container for details
      const bottomContainer = document.createElement('div')
      bottomContainer.className = 'bottom-container'
      
      const title = document.createElement('h3')
      title.textContent = song.title
      
      const artist = document.createElement('p')
      artist.innerHTML = `<strong>Artist:</strong> ${song.artist}`
      
      const yearGenre = document.createElement('p')
      yearGenre.innerHTML = `<strong>Year:</strong> ${song.year} | <strong>Genre:</strong> ${song.genre}`
      
      const readMore = document.createElement('a')
      readMore.textContent = 'Listen More >'
      readMore.href = `/songs/${song.id}`
      readMore.setAttribute('role', 'button')
      readMore.className = 'outline'
      
      bottomContainer.appendChild(title)
      bottomContainer.appendChild(artist)
      bottomContainer.appendChild(yearGenre)
      bottomContainer.appendChild(readMore)
      
      card.appendChild(topContainer)
      card.appendChild(bottomContainer)
      
      grid.appendChild(card)
    })
    
    mainContent.appendChild(grid)
    
  } catch (error) {
    console.error('Error fetching songs:', error)
    document.getElementById('main-content').innerHTML = '<h2>Error loading songs. Please try again.</h2>'
  }
}

// Check if we're on the main page
const requestedUrl = window.location.pathname.split('/').filter(Boolean)[0]

if (requestedUrl && requestedUrl !== 'songs') {
  window.location.href = '../404.html'
} else if (requestedUrl === 'songs') {
  // We're on the API route, not the main page
} else {
  renderSongs()
}