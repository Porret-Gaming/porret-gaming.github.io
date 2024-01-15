function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// Get the dropdown toggle elements by their unique IDs
// var dropdownToggle1 = document.getElementById("navbarDropdown1");
// var dropdownToggle2 = document.getElementById("navbarDropdown2");

// Get the dropdown menu elements by their unique IDs
// var dropdownMenu1 = document.getElementById("dropdownMenu1");
// var dropdownMenu2 = document.getElementById("dropdownMenu2");

// Dropdown menu 1
// var isMenuOpen1 = false;
// dropdownToggle1.addEventListener("mouseover", function () {
//   if (!isMenuOpen1) {
//     isMenuOpen1 = true;
//     this.click();
//   }
// });
// dropdownToggle1.addEventListener("click", function (event) {
//   if (event.isTrusted) {
//     isMenuOpen1 = !isMenuOpen1;
//   }
// });
// dropdownToggle1.addEventListener("mouseleave", function (event) {
//   var mouseY = event.clientY;
//   var elementRect = dropdownToggle1.getBoundingClientRect();
//   var elementBottom = elementRect.top + elementRect.height;

//   if (mouseY < elementBottom && isMenuOpen1) {
//     isMenuOpen1 = false;
//     dropdownToggle1.click();
//   }
// });
// dropdownMenu1.addEventListener("mouseleave", function (event) {
//   var mouseY = event.clientY;
//   var elementRect = dropdownMenu1.getBoundingClientRect();
//   if (mouseY > elementRect.top && isMenuOpen1) {
//     isMenuOpen1 = false
//     dropdownToggle1.click();
//   }
// });

// Dropdown menu 2
// var isMenuOpen2 = false;
// dropdownToggle2.addEventListener("mouseover", function () {
//   if (!isMenuOpen2) {
//     isMenuOpen2 = true;
//     this.click();
//   }
// });
// dropdownToggle2.addEventListener("click", function (event) {
//   if (event.isTrusted) {
//     isMenuOpen2 = !isMenuOpen2;
//   }
// });
// dropdownToggle2.addEventListener("mouseleave", function (event) {
//   var mouseY = event.clientY;
//   var elementRect = dropdownToggle2.getBoundingClientRect();
//   var elementBottom = elementRect.top + elementRect.height;

//   if (mouseY < elementBottom && isMenuOpen2) {
//     isMenuOpen2 = false;
//     dropdownToggle2.click();
//   }
// });
// dropdownMenu2.addEventListener("mouseleave", function (event) {
//   var mouseY = event.clientY;
//   var elementRect = dropdownMenu2.getBoundingClientRect();
//   if (mouseY > elementRect.top && isMenuOpen2) {
//     isMenuOpen2 = false
//     dropdownToggle2.click();
//   }
// });

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

// Update any news feeds
const news = document.getElementById('news');
if (news) {
  news.innerHTML =`
<div class="news-card expanded">
  <div class="news-container">
      <div class="news-group-item">
          <div class="row">
              <div class="col-auto" style="padding-right: 0">
                  <img class="news-badge" src="../../../images/Billing/GooglePlay_Billing_Plugin_Logo.png">
              </div>
              <div class="col" style="padding-left: 10px">
                  <div class="news-title">New Unreal Engine Plugin</div>
                  <div class="news-sub-title">2024-01-15</div>
              </div>
          </div>
      </div>
      
      <div class="news-info">
          <div class="row">
              <div class="col-4">
                  <img style="max-height: 156px; padding-top: 10px; padding-bottom: 10px" src="../../../images/general/BillingUpdate_Thumbnail.png">
              </div>
              <div class="col-8" style="display:flex; align-items: center; margin: 0">
                  <div class="news-info-details" style="font-weight: 500">
                      <ul>
                          <li>Update billing library</li>
                          <li>Cheaper Alternative</li>
                          <li>Billing Features Excluded</li>
                      </ul>
                  </div>
              </div>
          </div>
          <a class="btn-learn-more" href="../../../plugins/google-play-services/billing-update/overview.html?utm_source=News">Learn more</a>
      </div>
  </div>
</div>
<div class="news-card">
  <div class="news-container">
      <div class="news-group-item">
          <div class="row">
              <div class="col-auto" style="padding-right: 0">
                  <img class="news-badge" src="../../../images/Billing/GooglePlay_Billing_Plugin_Logo.png">
              </div>
              <div class="col" style="padding-left: 10px">
                  <div class="news-title">Release Notes</div>
                  <div class="news-sub-title">2024-01-09</div>
              </div>
          </div>
      </div>
      
      <div class="news-info">
          <div class="news-info-title">
              Play Services: Billing Release Notes
          </div>
          <div class="news-info-details">
              <ul>
                  <li>New blueprint node</li>
                  <li>Handle non-consumables</li>
                  <li>Default to consumables</li>
              </ul>
          </div>
          <a class="btn-learn-more" href="../../../plugins/google-play-services/billing/configure_purchase_handling.html?utm_source=News">Learn more</a>
      </div>
  </div>
</div>
<div class="news-card">
  <div class="news-container">
      <div class="news-group-item">
          <div class="row">
              <div class="col-auto" style="padding-right: 0">
                  <img class="news-badge" src="../../../images/Admob/Admob_Plugin_Logo.png">
              </div>
              <div class="col" style="padding-left: 10px">
                  <div class="news-title">New Unreal Engine Plugin</div>
                  <div class="news-sub-title">2024-01-03</div>
              </div>
          </div>
      </div>
      
      <div class="news-info">
          <div class="news-info-title">
              Admob Plugin Docs Early Access
          </div>
          <div class="news-info-details">
              <ul>
                  <li>Review our Advertising Plugin</li>
                  <li>Provide any feedback before release</li>
                  <li>Suggestions may be included!</li>
              </ul>
          </div>
          <a class="btn-learn-more" href="../../../plugins/advertising/admob/overview.html?utm_source=News">Learn more</a>
      </div>
  </div>
</div>
<div class="news-card">
  <div class="news-container">
      <div class="news-group-item">
          <div class="row">
              <div class="col-auto" style="padding-right: 0">
                  <img class="news-badge" src="../../../images/Billing/GooglePlay_Billing_Plugin_Logo.png">
              </div>
              <div class="col" style="padding-left: 10px">
                  <div class="news-title">Release Notes</div>
                  <div class="news-sub-title">2023-11-30</div>
              </div>
          </div>
      </div>
      
      <div class="news-info">
          <div class="news-info-title">
              Play Services: Billing Release Notes
          </div>
          <div class="news-info-details">
              <ul>
                  <li>Limit the number of retry attempts</li>
                  <li>Prevent continuous reconnection attempts</li>
                  <li>Automatically restart retry loop</li>
              </ul>
          </div>
          <a class="btn-learn-more" href="../../../plugins/google-play-services/billing/overview.html?utm_source=News">Learn more</a>
      </div>
  </div>
</div>
<div class="news-card">
  <div class="news-container">
      <div class="news-group-item">
          <div class="row">
              <div class="col-auto" style="padding-right: 0">
                  <img class="news-badge" src="../../../images/InAppUpdates/GooglePlay_InAppUpdates_Plugin_Logo.png">
              </div>
              <div class="col" style="padding-left: 10px">
                  <div class="news-title">New Unreal Engine Plugin</div>
                  <div class="news-sub-title">2023-10-02</div>
              </div>
          </div>
      </div>
      
      <div class="news-info">
          <div class="row">
              <div class="col-4">
                  <img style="max-height: 156px; padding-top: 10px; padding-bottom: 10px" src="../../../images/general/InAppUpdates_Thumbnail.png">
              </div>
              <div class="col-8" style="display:flex; align-items: center; margin: 0">
                  <div class="news-info-details" style="font-weight: 500">
                      <ul>
                          <li>Track Available Updates</li>
                          <li>Immediate Required Updates</li>
                          <li>Background Flexible Updates</li>
                      </ul>
                  </div>
              </div>
          </div>
          <a class="btn-learn-more" href="../../../plugins/google-play-services/in-app-updates/overview.html?utm_source=News">Learn more</a>
      </div>
  </div>
</div>
  `;
}

 // Get all news cards
 const newsCards = document.querySelectorAll('.news-card');

 // Add hover event listeners to each news card
 newsCards.forEach((card) => {

  card.addEventListener('click', () => {
      console.log("mouse enter!");   
      card.classList.toggle('expanded');
     });
 })


 function showSubmenu() {
    console.log("showing ul");
    const ul = $(this).children('ul');
    ul.show();
}

function hideSubmenu() {
    console.log("hiding ul");
    const ul = $(this).children('ul');
    ul.hide();
}

const submenus = document.querySelectorAll('.dropdown-submenu');
submenus.forEach((submenu) => {
    submenu.addEventListener('mouseenter', showSubmenu);
    submenu.addEventListener('mouseleave', hideSubmenu);
});

//  $(document).ready(function () {
//     // Attach the function to both click and mouseover events
//     $('.dropdown-submenu a.dropdown-item').on({
//         click: function (e) {
//             toggleSubmenu.call(this); // Ensure 'this' refers to the clicked element
//             e.stopPropagation();
//             e.preventDefault();
//         },
//         mouseover: toggleSubmenu
//     });
// });