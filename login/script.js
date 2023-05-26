// Major assistance provided by Raycast AI, see README for more info
function loginFlow() { // Initialises "loginFlow" function
  const usernameInput = document.getElementById("username").value; // Sets var "usernameInput" to the value of the username field
  const passwordInput = document.getElementById("password").value; // Sets var "passwordInput" to the value of the password field
  const loginConfirm = document.getElementById("loginConfirm"); // Sets var "loginConfirm" to the "loginConfirm" paragraph in the HTML
  var now = new Date(); // Sets a variable for the current date
  var expires = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Sets variable for expiration of the login cookie

  if (usernameInput !== "admin") { // Checks if var "usernameInput" does not equal admin
    loginConfirm.innerHTML = "Username incorrect."; // Changes "loginConfirm" to "Username incorrect." and displays it to the user
    return;
  }

  if (passwordInput !== "admin") { // Checks if var "passwordInput" does not equal admin
    loginConfirm.innerHTML = "Password incorrect."; // Changes "loginConfirm" to "Password incorrect." and displays it to the user
    return;
  }

  document.cookie = "login=true; expires=" + expires.toUTCString(); // Saves (very basic) login cookie to the browser
  window.location.href = "https://athleticscarnival.umbreon.zip/marshallpage"; // Redirects the user to the marshalling page if both fields contain "admin"
}
// This login method has potentially the worst security ever seen in a web app, second only to Dropbox in 2011 when passwords were optional for a few hours.
// https://techcrunch.com/2011/06/20/dropbox-security-bug-made-passwords-optional-for-four-hours/

// This login method does the following wrong:
// * Stores the user credentials in plain-text as opposed to hashing at least the password
// * Stores the credentials IN THE CODE, allowing any visitor to inspect element to grab them
// * Allows the user to simply go to athleticscarnival.umbreon.zip/marshallpage and completely bypass the login 💀

// As of coding, the only protection this has is it's locally hosted and requires OAuth via Tailscale to access the web server. This will no longer exist when moved to Replit.

// Ideally, the marshalling page will check that the user has logged in through a cookie of some sort and redirect to the login page if not logged in.
// I could also hand over the entire login process to Google OAuth and only need to store an email or token on our servers.
// I don't know how to do any of this, and none of it will be implemented.