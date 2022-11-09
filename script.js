const img = document.querySelector(".hero-img");
const menuItems = document.querySelectorAll(".menu-item");
const coverButton = document.querySelector(".cover");
const containButton = document.querySelector(".contain");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.textContent
    if(content === "Inicio") {
      img.style.backgroundImage = "url(bg2x.png)"
    }
    if(content === "Clases de tú a tú") {
      img.style.backgroundImage = "url(collage2x.png)"
    }
    if(content === "Study zone") {
      img.style.backgroundImage = "url(zone2x.png)"
    }
  })
})

coverButton.addEventListener("click", () => {
  img.style.backgroundSize = "cover"
})

containButton.addEventListener("click", () => {
  img.style.backgroundSize = "contain"
})