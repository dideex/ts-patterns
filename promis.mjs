const loadImage = url => new Promise((res, rej) => {
  let image = new Image()
  image.onload = () => res(image)
  image.onerror = () => rej(new Error('Couldnt load the image' + url))
  image.src = url
})

const addImg = src => {
  const imgElement = document.createElement('img')
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImage('image/cat1.png'),
  loadImage('image/cat3.png'),
  loadImage('image/cat2.png'),
]).then(images => {
  images.forEach(img => addImg(img.src))
}).catch(err => console.error(err))