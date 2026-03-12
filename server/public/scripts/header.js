const header = document.querySelector('header')

header.innerHTML = ''

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const logo = document.createElement('img')
logo.src = 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Music_logo.png'
logo.alt = 'Music Listicle Logo'
logo.className = 'logo'

const title = document.createElement('h1')
title.textContent = '🎵 Music Listicle 🎵'

headerLeft.appendChild(logo)
headerLeft.appendChild(title)

// Create right section with home button
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const homeButton = document.createElement('button')
homeButton.textContent = 'Home'
homeButton.addEventListener('click', () => {
  window.location.href = '/'
})

headerRight.appendChild(homeButton)

// Append both directly to header (no container div)
header.appendChild(headerLeft)
header.appendChild(headerRight)