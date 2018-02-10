var dropdown = document.getElementsByClassName("dropdown_btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var project = document.getElementsByClassName("project_btn");
var x;

for (x = 0; x < project.length; x++) {
  project[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var projectContent = this.nextElementSibling;
    if (projectContent.style.display === "block") {
      projectContent.style.display = "none";
    } else {
      projectContent.style.display = "block";
    }
  });
}