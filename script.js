function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

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

/* Documentation Sidebar  */
document.addEventListener("DOMContentLoaded", function () {
  const headerNavbar = document.querySelector('.navbar');
  const sidebar = document.querySelector('.sidebar');
  const footer = document.querySelector('footer');
  const scrollOffset = 37;

  if (sidebar != null) {
    const sidebarWidth = sidebar.offsetWidth;

    function toggleFixedClass() {
      if (isMobileDevice()) {
        return;
      }
      const scrollPosition = window.pageYOffset;
      const pageHeight = document.documentElement.scrollHeight;
      const headerNavbarHeight = headerNavbar.offsetHeight;
      const footerHeight = footer.offsetHeight;
      const viewportHeight = window.innerHeight;

      const sidebarHeight = sidebar.offsetHeight;


      var footerColided = false;
      if (viewportHeight < pageHeight - footerHeight) // ensure there is a scrollbar
      {
        footerColided = scrollPosition + (sidebarHeight + 40) > pageHeight - footerHeight
      }

      if (footerColided) {
        sidebar.style.top = (pageHeight - footerHeight) - (scrollPosition + (sidebarHeight + 40)) + "px";
        sidebar.style.maxWidth = sidebarWidth + "px";
      }
      else {
        if (scrollPosition - scrollOffset >= headerNavbarHeight) {
          sidebar.classList.add('fixed-top');
          sidebar.style.maxWidth = sidebarWidth + "px";
        } else {
          sidebar.classList.remove('fixed-top');
          sidebar.style.removeProperty('max-width');
        }
        sidebar.style.top = 0;
      }
    }
    window.addEventListener('scroll', toggleFixedClass);
  }
});



// Get references to the button and sidebar elements
const mobileButton = document.querySelector('.mobile-button');
const sidebar = document.querySelector('#sidebar');

// Add a click event listener to the button
if (mobileButton) {
  mobileButton.addEventListener('click', function () {
    // Toggle the 'show-sidebar' class on the sidebar element
    console.log("Got here!!");
    sidebar.classList.toggle('show-sidebar');
    sidebar.classList.toggle('d-none');

    // Toggle the background color class
    mobileButton.classList.toggle('toggled');
  });
}

