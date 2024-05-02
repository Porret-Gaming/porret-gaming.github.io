function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

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
                  <img class="news-badge" src="../../../images/AndroidNotifications/AdvancedNotifications_Plugin_Logo.png">
              </div>
              <div class="col" style="padding-left: 10px">
                  <div class="news-title">New Plugin Early Access</div>
                  <div class="news-sub-title">2024-05-02</div>
              </div>
          </div>
      </div>
      <div class="news-info">
          <div class="news-info-title">
              Advanced Notifications
          </div>
          <div class="news-info-details">
              <ul>
                  <li>Early access to documentation</li>
                  <li>Let us know what you think!</li>
                  <li>Suggestions may be included</li>
              </ul>
          </div>
          <a class="btn-learn-more" href="../../../plugins/android-native/notifications/overview.html?utm_source=News">Learn more</a>
      </div>
  </div>
</div>
<div class="news-card expanded">
    <div class="news-container">
        <div class="news-group-item">
            <div class="row">
                <div class="col-auto" style="padding-right: 0">
                    <img class="news-badge" src="../../../images/Admob/Admob_Plugin_Logo.png">
                </div>
                <div class="col" style="padding-left: 10px">
                    <div class="news-title">Pending Release Alert</div>
                    <div class="news-sub-title">2024-05-01</div>
                </div>
            </div>
        </div>
        <div class="news-info">
            <div class="news-info-title">
                Advanced Ads Pro
            </div>
            <div class="news-info-details">
                <ul>
                    <li>Google/Admob has Removed Mediation Partners</li>
                    <li>Yahoo (Verizon Media) to be removed</li>
                    <li>Tapjoy to be removed</li>
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
                    <img class="news-badge" src="../../../images/AndroidSensors/Android_Sensors_Plugin_Logo.png">
                </div>
                <div class="col" style="padding-left: 10px">
                    <div class="news-title">Release Notes</div>
                    <div class="news-sub-title">2024-04-26</div>
                </div>
            </div>
        </div>
        <div class="news-info">
            <div class="news-info-title">
                Android Sensors Release Notes
            </div>
            <div class="news-info-details">
                <ul>
                    <li>Added New Blueprint Node</li>
                    <li>Get True North Device Orientation</li>
                    <li>Uses Two Sensors</li>
                </ul>
            </div>
            <a class="btn-learn-more" href="../../../plugins/android-native/sensors/overview.html?utm_source=News">Learn more</a>
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
                    <div class="news-title">Release Notes</div>
                    <div class="news-sub-title">2024-04-25</div>
                </div>
            </div>
        </div>
        <div class="news-info">
            <div class="news-info-title">
                Advanced Ads Pro Release Notes
            </div>
            <div class="news-info-details">
                <ul>
                    <li>Removed Small Padding Around Banner Ads</li>
                    <li>Anchored Adapative Banner Size Fix</li>
                    <li>Full Width Adaptive Banners in Portrait</li>
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
                  <img class="news-badge" src="../../../images/PlayBaseServices/GooglePlay_BaseServices_Plugin_Logo.png">
              </div>
              <div class="col-9" style="padding-left: 10px">
                  <div class="news-title">Release Notes</div>
                  <div class="news-sub-title">2024-03-18</div>
              </div>
          </div>
      </div>
      <div class="news-info">
          <div class="news-info-title">
            Play Base Services V2 Release Notes
          </div>
          <div class="news-info-details">
              <ul>
                  <li>New BP Node to Submit Score Immediatly</li>
                  <li>New OnSuccess Delegate</li>
                  <li>New OnFailure Delegate</li>
              </ul>
          </div>
          <a class="btn-learn-more" href="../../../plugins/google-play-services/base-services/overview.html?utm_source=News">Learn more</a>
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
                  <div class="news-title">Release Notes</div>
                  <div class="news-sub-title">2024-02-23</div>
              </div>
          </div>
      </div>
      
      <div class="news-info">
          <div class="news-info-title">
            Advanced Ads Pro Release Notes
          </div>
          <div class="news-info-details">
              <ul>
                  <li>Update Request Consent and Initialise BP</li>
                  <li>Add On Consent Error Delegate</li>
                  <li>Add On Initialised Delegate</li>
              </ul>
          </div>
          <a class="btn-learn-more" href="../../../plugins/advertising/admob/overview.html?utm_source=News">Learn more</a>
      </div>
  </div>
</div>
  `;
}

const docsNavBar = document.getElementById('docs-navbar');
if (docsNavBar) {
    docsNavBar.innerHTML = `
<ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Games
        </a>
        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-centered" id="dropdownMenu1"
            aria-labelledby="navbarDropdown">
            <li>
                <a class="dropdown-item" href="../../../Squiggle.html">
                    <div class="dropdown-item-content">
                        <img src="../../../images/Squiggle/Squiggle_Logo.png" alt="Squiggle"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Squiggle
                            <span class="dropdown-item-subtext">Android Mobile Game</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            UE Plugins
        </a>
        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-centered" id="dropdownMenu2"
            aria-labelledby="navbarDropdown">
            <li class="dropdown-toggle dropdown-submenu">
                <a class="dropdown-item" href="../../google-play-services/base-services/overview.html">
                    <div class="dropdown-item-content">
                    <img src="../../../images/PlayBaseServices/GooglePlay_BaseServices_Plugin_Logo.png" alt="Google Play Base Services"
                        class="dropdown-item-image">
                    <div class="dropdown-item-text">
                        Play Base Services
                        <span class="dropdown-item-subtext">Android Plugins</span>
                    </div>
                    </div>
                </a>
                <div class="submenu-overlay"></div> 
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                        <a class="dropdown-item" href="../../google-play-services/base-services/overview.html">
                            <div class="dropdown-item-content">
                                <img src="../../../images/PlayBaseServices/GooglePlay_BaseServices_Plugin_Logo.png" alt="Google Play Base Services"
                                    class="dropdown-item-image">
                                <div class="dropdown-item-text">
                                    Play: Base Services
                                    <span class="dropdown-item-subtext">Android Plugin</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="../../google-play-services/saved-games/overview.html">
                            <div class="dropdown-item-content">
                                <img src="../../../images/SavedGames/GooglePlay_SavedGames_Plugin_Logo.png" alt="Google Play Saved Games"
                                    class="dropdown-item-image">
                                <div class="dropdown-item-text">
                                    Play: Saved Games
                                    <span class="dropdown-item-subtext">Android Plugin</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="../../google-play-services/events/overview.html">
                            <div class="dropdown-item-content">
                                <img src="../../../images/Events/GooglePlay_Events_Plugin_Logo.png" alt="Google Play Events"
                                    class="dropdown-item-image">
                                <div class="dropdown-item-text">
                                    Play: Events
                                    <span class="dropdown-item-subtext">Android Plugin</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="dropdown-toggle dropdown-submenu">
                <a class="dropdown-item" href="../../google-play-services/billing/overview.html">
                    <div class="dropdown-item-content">
                        <img src="../../../images/Billing/GooglePlay_Billing_Plugin_Logo.png" alt="Google Play Billing"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Play: Billing
                            <span class="dropdown-item-subtext">Android Plugins</span>
                        </div>
                    </div>
                </a>
                <div class="submenu-overlay"></div>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                        <a class="dropdown-item" href="../../google-play-services/billing/overview.html">
                            <div class="dropdown-item-content">
                                <img src="../../../images/Billing/GooglePlay_Billing_Plugin_Logo.png" alt="Google Play Billing"
                                    class="dropdown-item-image">
                                <div class="dropdown-item-text">
                                    Play: Billing
                                    <span class="dropdown-item-subtext">Android Plugin</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="../../google-play-services/billing-update/overview.html">
                            <div class="dropdown-item-content">
                                <img src="../../../images/Billing/GooglePlay_Billing_Plugin_Logo.png" alt="Google Play Billing"
                                    class="dropdown-item-image">
                                <div class="dropdown-item-text">
                                    Billing Library Update
                                    <span class="dropdown-item-subtext">Android Plugin</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a class="dropdown-item" href="../../google-play-services/in-app-reviews/overview.html">
                    <div class="dropdown-item-content">
                        <img src="../../../images/InAppReviews/GooglePlay_Reviews_Plugin_Logo.png" alt="Google Play Reviews"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Play: Reviews
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a class="dropdown-item" href="../../google-play-services/in-app-updates/overview.html">
                    <div class="dropdown-item-content">
                        <img src="../../../images/InAppUpdates/GooglePlay_InAppUpdates_Plugin_Logo.png" alt="Google Play Updates"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Play: Updates
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a class="dropdown-item" href="../../android-native/sensors/overview.html">
                    <div class="dropdown-item-content">
                        <img src="../../../images/AndroidSensors/Android_Sensors_Plugin_Logo.png" alt="Android Sensors"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Android Sensors
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a class="dropdown-item" href="../../android-native/notifications/overview.html">
                    <div class="dropdown-item-content">
                        <img src="../../../images/AndroidNotifications/AdvancedNotifications_Plugin_Logo.png" alt="Notifications"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Android Notifications
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a class="dropdown-item" href="../../advertising/admob/overview.html">
                    <div class="dropdown-item-content">
                        <img src="../../../images/Admob/Admob_Plugin_Logo.png" alt="Advertising"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Admob Ads
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../../../contact.html">Contact</a>
    </li>
    <li class="nav-item" style="padding-left: 18px">
        <a class="nav-link" href="../../release/notes/porret_gaming.html">Release Notes</a>
    </li>
</ul>
    `;
}

const rootNavBar = document.getElementById('root-navbar');
if (rootNavBar) {
    rootNavBar.innerHTML = `
<ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Games
      </a>
      <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-centered" id="dropdownMenu1"
        aria-labelledby="navbarDropdown">
        <li>
          <a class="dropdown-item" href="Squiggle.html">
            <div class="dropdown-item-content">
              <img src="./images/Squiggle/Squiggle_Logo.png" alt="Squiggle" class="dropdown-item-image">
              <div class="dropdown-item-text">
                Squiggle
                <span class="dropdown-item-subtext">Android Mobile Game</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        UE Plugins
      </a>
      <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-centered" id="dropdownMenu2"
        aria-labelledby="navbarDropdown">
        <li class="dropdown-toggle dropdown-submenu">
          <a class="dropdown-item" href="plugins/google-play-services/base-services/overview.html">
            <div class="dropdown-item-content">
              <img src="./images/PlayBaseServices/GooglePlay_BaseServices_Plugin_Logo.png" alt="Google Play Base Services"
                class="dropdown-item-image">
              <div class="dropdown-item-text">
                Play Base Services
                <span class="dropdown-item-subtext">Android Plugins</span>
              </div>
            </div>
          </a>
          <div class="submenu-overlay"></div> 
          <ul class="dropdown-menu dropdown-menu-dark">
            <li>
                <a class="dropdown-item" href="plugins/google-play-services/base-services/overview.html">
                    <div class="dropdown-item-content">
                        <img src="./images/PlayBaseServices/GooglePlay_BaseServices_Plugin_Logo.png" alt="Google Play Base Services"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Play: Base Services
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
            <a class="dropdown-item" href="plugins/google-play-services/saved-games/overview.html">
                    <div class="dropdown-item-content">
                        <img src="./images/SavedGames/GooglePlay_SavedGames_Plugin_Logo.png" alt="Google Play Saved Games"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Play: Saved Games
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a class="dropdown-item" href="plugins/google-play-services/events/overview.html">
                    <div class="dropdown-item-content">
                        <img src="./images/Events/GooglePlay_Events_Plugin_Logo.png" alt="Google Play Events"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Play: Events
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
          </ul>
        </li>
        <li class="dropdown-toggle dropdown-submenu">
          <a class="dropdown-item" href="plugins/google-play-services/billing/overview.html">
            <div class="dropdown-item-content">
              <img src="./images/Billing/GooglePlay_Billing_Plugin_Logo.png" alt="Google Play Billing"
                class="dropdown-item-image">
              <div class="dropdown-item-text">
                Play: Billing
                <span class="dropdown-item-subtext">Android Plugins</span>
              </div>
            </div>
          </a>
          <div class="submenu-overlay"></div> 
          <ul class="dropdown-menu dropdown-menu-dark">
            <li>
                <a class="dropdown-item" href="plugins/google-play-services/billing/overview.html">
                    <div class="dropdown-item-content">
                        <img src="./images/Billing/GooglePlay_Billing_Plugin_Logo.png" alt="Google Play Billing"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Play: Billing
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a class="dropdown-item" href="plugins/google-play-services/billing-update/overview.html">
                    <div class="dropdown-item-content">
                        <img src="./images/Billing/GooglePlay_Billing_Plugin_Logo.png" alt="Google Play Billing"
                            class="dropdown-item-image">
                        <div class="dropdown-item-text">
                            Billing Library Update
                            <span class="dropdown-item-subtext">Android Plugin</span>
                        </div>
                    </div>
                </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="dropdown-item" href="plugins/google-play-services/in-app-reviews/overview.html">
              <div class="dropdown-item-content">
                  <img src="./images/InAppReviews/GooglePlay_Reviews_Plugin_Logo.png" alt="Google Play Reviews"
                      class="dropdown-item-image">
                  <div class="dropdown-item-text">
                      Play: Reviews
                      <span class="dropdown-item-subtext">Android Plugin</span>
                  </div>
              </div>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="plugins/google-play-services/in-app-updates/overview.html">
            <div class="dropdown-item-content">
              <img src="./images/InAppUpdates/GooglePlay_InAppUpdates_Plugin_Logo.png" alt="Google Play Updates" class="dropdown-item-image">
              <div class="dropdown-item-text">
                Play: Updates
                <span class="dropdown-item-subtext">Android Plugin</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="plugins/android-native/sensors/overview.html">
              <div class="dropdown-item-content">
                  <img src="./images/AndroidSensors/Android_Sensors_Plugin_Logo.png" alt="Android Sensors"
                      class="dropdown-item-image">
                  <div class="dropdown-item-text">
                      Android Sensors
                      <span class="dropdown-item-subtext">Android Plugin</span>
                  </div>
              </div>
          </a>
        </li>
        <li>
            <a class="dropdown-item" href="plugins/android-native/notifications/overview.html">
                <div class="dropdown-item-content">
                    <img src="./images/AndroidNotifications/AdvancedNotifications_Plugin_Logo.png" alt="Notifications"
                        class="dropdown-item-image">
                    <div class="dropdown-item-text">
                        Android Notifications
                        <span class="dropdown-item-subtext">Android Plugin</span>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a class="dropdown-item" href="plugins/advertising/admob/overview.html">
                <div class="dropdown-item-content">
                    <img src="./images/Admob/Admob_Plugin_Logo.png" alt="Advertising"
                        class="dropdown-item-image">
                    <div class="dropdown-item-text">
                        Admob Ads
                        <span class="dropdown-item-subtext">Android Plugin</span>
                    </div>
                </div>
            </a>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./contact.html">Contact</a>
    </li>
    <li class="nav-item" style="padding-left: 18px">
        <a class="nav-link" href="plugins/release/notes/porret_gaming.html">Release Notes</a>
    </li>
  </ul>
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