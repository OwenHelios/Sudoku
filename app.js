const cells = document.querySelectorAll("td")
cells.forEach(cell => {
  cell.textContent = Math.ceil(Math.random() * 9)
})
