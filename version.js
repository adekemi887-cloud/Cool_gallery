// version.js

// EDIT THIS NUMBER TO UPDATE THE APP VERSION
const APP_VERSION = "1.0.0";


// DO NOT EDIT BELOW THIS LINE - This code injects the version into your HTML
function displayAppVersion() {
  const versionDisplay = document.getElementById('app-version-display');
  if (versionDisplay) {
    versionDisplay.textContent = `Version ${APP_VERSION}`;
  }
}

// Ensure it runs once the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', displayAppVersion);
} else {
  displayAppVersion();
}