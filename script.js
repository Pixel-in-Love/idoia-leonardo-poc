const img = document.querySelector(".img");
const imgContainer = document.querySelector(".hero-img");
const menuItems = document.querySelectorAll(".menu-item");
const coverButton = document.querySelector(".cover");
const containButton = document.querySelector(".contain");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.textContent
    if(content === "Inicio") {
      img.src = "bg2x.png"
    }
    if(content === "Clases de tú a tú") {
      img.src = "collage2x.png"
    }
    if(content === "Study zone") {
      img.src = "zone2x.png"
    }
  })
})

coverButton.addEventListener("click", () => {
  imgContainer.style.flex = "1";
  img.style.objectFit = "cover"
})

containButton.addEventListener("click", () => {
  imgContainer.style.flex = "none";
  img.style.objectFit = "contain"
})