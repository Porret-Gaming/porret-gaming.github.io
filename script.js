// Get the dropdown toggle elements by their unique IDs
var dropdownToggle1 = document.getElementById("navbarDropdown1");
var dropdownToggle2 = document.getElementById("navbarDropdown2");

// Get the dropdown menu elements by their unique IDs
var dropdownMenu1 = document.getElementById("dropdownMenu1");
var dropdownMenu2 = document.getElementById("dropdownMenu2");

// Dropdown menu 1
var isMenuOpen1 = false;
dropdownToggle1.addEventListener("mouseover", function () {
  if (!isMenuOpen1) {
    isMenuOpen1 = true;
    this.click();
  }
});
dropdownToggle1.addEventListener("click", function (event) {
  if (event.isTrusted) {
    isMenuOpen1 = !isMenuOpen1;
  }
});
dropdownToggle1.addEventListener("mouseleave", function (event) {
  var mouseY = event.clientY;
  var elementRect = dropdownToggle1.getBoundingClientRect();
  var elementBottom = elementRect.top + elementRect.height;

  if (mouseY < elementBottom && isMenuOpen1) {
    isMenuOpen1 = false;
    dropdownToggle1.click();
  }
});
dropdownMenu1.addEventListener("mouseleave", function (event) {
  var mouseY = event.clientY;
  var elementRect = dropdownMenu1.getBoundingClientRect();
  if (mouseY > elementRect.top && isMenuOpen1) {
    isMenuOpen1 = false
    dropdownToggle1.click();
  }
});

// Dropdown menu 2
var isMenuOpen2 = false;
dropdownToggle2.addEventListener("mouseover", function () {
  if (!isMenuOpen2) {
    isMenuOpen2 = true;
    this.click();
  }
});
dropdownToggle2.addEventListener("click", function (event) {
  if (event.isTrusted) {
    isMenuOpen2 = !isMenuOpen2;
  }
});
dropdownToggle2.addEventListener("mouseleave", function (event) {
  var mouseY = event.clientY;
  var elementRect = dropdownToggle2.getBoundingClientRect();
  var elementBottom = elementRect.top + elementRect.height;

  if (mouseY < elementBottom && isMenuOpen2) {
    isMenuOpen2 = false;
    dropdownToggle2.click();
  }
});
dropdownMenu2.addEventListener("mouseleave", function (event) {
  var mouseY = event.clientY;
  var elementRect = dropdownMenu2.getBoundingClientRect();
  if (mouseY > elementRect.top && isMenuOpen2) {
    isMenuOpen2 = false
    dropdownToggle2.click();
  }
});