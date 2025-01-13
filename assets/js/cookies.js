// Check if cookies have already been accepted or rejected
if (!document.cookie.includes("cookiesAccepted=true") && !document.cookie.includes("cookiesRejected=true")) {
    document.getElementById("cookieConsent").style.display = "block";
  }
  
  // When the user accepts cookies
  document.getElementById("acceptCookies").addEventListener("click", function () {
    // Set a cookie for acceptance with a 30-day expiration
    document.cookie = "cookiesAccepted=true; max-age=" + 60 * 60 * 24 * 30 + "; path=/";
  
    // Hide the consent banner
    document.getElementById("cookieConsent").style.display = "none";
  
    // Initialize Google Analytics
    initializeGoogleAnalytics();
  });
  
  // When the user rejects cookies
  document.getElementById("rejectCookies").addEventListener("click", function () {
    // Set a cookie for rejection with a 30-day expiration
    document.cookie = "cookiesRejected=true; max-age=" + 60 * 60 * 24 * 30 + "; path=/";
  
    // Hide the consent banner
    document.getElementById("cookieConsent").style.display = "none";
  });
  
  // Function to initialize Google Analytics
  function initializeGoogleAnalytics() {
    // Check if cookies have been accepted
    if (document.cookie.includes("cookiesAccepted=true")) {
      // Load Google Analytics script dynamically
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-C62ZHL5CT3`;
      document.head.appendChild(script);
  
      // Initialize Google Analytics
      script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-C62ZHL5CT3");
      };
    }
  }
  