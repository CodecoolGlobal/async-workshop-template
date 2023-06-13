function showMessage(message) {
  document
    .getElementById('message')
    .innerText = message
}

document
  .getElementById('waitButton')
  .addEventListener('click', async () => { 

    showMessage('waiting...')

    function task() {
      showMessage('awaited')
    }

    setTimeout(task, 2000)
  })
  

const imageUrl = 'https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg'

document
  .getElementById('loadButton')
  .addEventListener('click', () => {
    const messageElement = document.getElementById('message')
    messageElement.innerText = 'loading...'

    const image = document.createElement('img')
    image.src = imageUrl
    image.height = 250
    image.addEventListener('load', () => {
      
      console.log('loaded')
      messageElement.innerText = 'loaded.'
      document
        .getElementById('image')
        .appendChild(image)
    })
    image.addEventListener('error', () => {
      messageElement.innerText = 'error'
    })

  })
