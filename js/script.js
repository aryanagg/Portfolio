

document.getElementById("year").innerHTML = new Date().getFullYear();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    let arrow = this.querySelector(".arrow");
    
    content.style.display === "block"
    if (content.style.display === "block") {
      content.style.display = "none";
      arrow.innerHTML = '&rarr;';
    } else {
      content.style.display = "block";
      arrow.innerHTML = '&darr;';
    }
  });
}

window.onload = function () {
  for (var i = 0; i < coll.length; i++) {
    coll[i].classList.add("active");
    var content = coll[i].nextElementSibling;
    content.style.display = "block";
  }
};

window.addEventListener("load", function () {
  const nameElement = document.getElementById("name");
  if(!nameElement){
    return
  }
  const text = "Aryan Aggarwal";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      nameElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 150); // typing speed (ms)
    }
  }

  typeWriter();
});