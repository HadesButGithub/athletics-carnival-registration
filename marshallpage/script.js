var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, "$1"); // Sets var 'cookieValue' to the value of the 'loggedInStatus' cookie using regex
if (cookieValue) { // Redirects the user back to the auth page if the cookie does not equal true
    console.log("auth succeded")
}  else {
    console.log("auth failed")
    window.location.href = "https://athleticscarnival.flareon.lol/login";
}

// shit dont work :skull:
