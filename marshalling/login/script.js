// Major assistance provided by Raycast AI, see README for more info
function checkLogin() {
  var cookie = document.cookie; // Get the cookie string
  // Check if the cookie "login=true" exists and is not expired
  if (cookie.indexOf("login=true") != -1 && cookie.indexOf("login=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;") == -1) {
    // Check if the user is not already on the marshalling page
    if (window.location.pathname != "/marshalling/marshallpage") {
      window.location.href = "/marshalling/marshallpage"; // Redirect the user to the marshalling page if user is authenticated
    }
  }
}

// function that prompts the user with a popup saying "Are you sure you want to log out?" if the user presses the logout button
function logout() {
  if (confirm("Are you sure you want to log out?")) { // If the user presses "OK" on the popup
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Delete the login cookie
    window.location.href = "/marshalling/login"; // Redirect the user to the login page
  }
}


function loginFlow() { // Initialises "loginFlow" function
  let usernameInput = document.getElementById("username").value; // Sets var "usernameInput" to the value of the username field
  let passwordInput = document.getElementById("password").value; // Sets var "passwordInput" to the value of the password field
  let loginConfirm = document.getElementById("loginConfirm"); // Sets var "loginConfirm" to the "loginConfirm" paragraph in the HTML
  var now = new Date(); // Sets a variable for the current date
  var expires = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Sets variable for expiration of the login cookie

  if (usernameInput == "admin" && passwordInput == "admin") { 
    document.cookie = "login=true;" + "; path=/"; // Saves (very basic) login cookie to the browser
    window.location.href = "/marshalling/marshallpage"; // Redirects the user to the marshalling page if user is authenticated
  }
}

// This login method has potentially the worst security ever seen in a web app, second only to Dropbox in 2011 when passwords were optional for a few hours.
// https://techcrunch.com/2011/06/20/dropbox-security-bug-made-passwords-optional-for-four-hours/

// This login method does the following wrong:
// * Stores the user credentials in plain-text as opposed to hashing at least the password
// * Stores the credentials IN THE CODE, allowing any visitor to inspect element to grab them
// I could also hand the entire login process to Google OAuth and only need to store an email or token on our servers.
// I don't know how to do any of this, and none of it will be implemented. 