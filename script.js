const idImg = document.querySelector("#slide");
for (var i = 2; i< 30; i++){
   const image = document.createElement('img')
   image.src  = `https://diaba.github.io/portfolio/images/Slide${i}.jpeg`
   idImg.appendChild(image)
}