function checkLogin() {
  var cookie = document.cookie; // Get the cookie string
  if (cookie.includes("login=true")) { // Check if the cookie contains "login=true"
    console.log("success"); // Log success if the cookie exists
  } else {
    window.location.href = "/marshalling/login"; // Redirect to login page if the cookie doesn't exist
  }
}

function registerCompetitor() {

}

function registerEvent() {

}

function logout() {
  document.cookie = "cookieName=login; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Sets login cookie to date in past, rendering it invalid
  window.location.href = "/marshalling/login"; // Redirects back to login page
}

// NOTE 30/05/23 12:43pm - Attempting to use GitHub Copilot here
// NOTE 30/05/23 4:47pm - GitHub Copilot is not very good at JavaScript (that message was generated by github copilot)
// NOTE 31/05/23 9:30am - i did it :)
// NOTE 31/05/23 12:28pm - no i didnt :(