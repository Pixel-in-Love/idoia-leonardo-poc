const img = document.querySelector(".image");
const menuItems = document.querySelectorAll(".menu-item");

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