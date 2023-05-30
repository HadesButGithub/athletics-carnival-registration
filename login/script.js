// Major assistance provided by Raycast AI, see README for more info
function loginFlow() { // Initialises "loginFlow" function
  let usernameInput = document.getElementById("username").value; // Sets var "usernameInput" to the value of the username field
  let passwordInput = document.getElementById("password").value; // Sets var "passwordInput" to the value of the password field
  let loginConfirm = document.getElementById("loginConfirm"); // Sets var "loginConfirm" to the "loginConfirm" paragraph in the HTML
  var now = new Date(); // Sets a variable for the current date
  var expires = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Sets variable for expiration of the login cookie

  if (usernameInput == "admin" && passwordInput == "admin") { 
    document.cookie = "login=true; expires=" + expires.toUTCString(); // Saves (very basic) login cookie to the browser
    window.location.href = "https://athleticscarnival.flareon.lol/marshallpage"; // Redirects the user to the marshalling page if user is authenticated
  }
}
// This login method has potentially the worst security ever seen in a web app, second only to Dropbox in 2011 when passwords were optional for a few hours.
// https://techcrunch.com/2011/06/20/dropbox-security-bug-made-passwords-optional-for-four-hours/

// This login method does the following wrong:
// * Stores the user credentials in plain-text as opposed to hashing at least the password
// * Stores the credentials IN THE CODE, allowing any visitor to inspect element to grab them
// * Allows the user to simply go to athleticscarnival.flareon.lol/marshallpage and completely bypass the login 💀
// Ideally, the marshalling page will check that the user has logged in through a cookie of some sort and redirect to the login page if not logged in.
// I could also hand over the entire login process to Google OAuth and only need to store an email or token on our servers.
// I don't know how to do any of this, and none of it will be implemented.