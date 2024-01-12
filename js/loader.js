var timer;

function loaderAnimation() {
  timer = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementsByClassName("wrapper")[0].style.display = "none";
  document.getElementById("content").style.display = "block";
}