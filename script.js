function rotate(cardIndex) {
  const card = document.querySelectorAll(".card")[cardIndex - 1];
  card.classList.toggle("flipped");
}

function reveal() {
  document.getElementById("answers").style = "display: block";
}
