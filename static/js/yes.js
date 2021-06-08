var modal = document.getElementById("myModal");
var btn1 = document.getElementById("mybtn1");
var btn2 = document.getElementById("mybtn2");
var btn3 = document.getElementById("mybtn3");
var btn4 = document.getElementById("mybtn4");
var span = document.getElementsByClassName("close")[0]; 
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
  window.location.href = "https://figma.dp2gjansons.repl.co/client-main";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href = "https://figma.dp2gjansons.repl.co/client-main";
  }
}
