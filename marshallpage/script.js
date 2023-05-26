let cookieValue = document.cookie;
if (cookieValue) { // Redirects the user back to the auth page if the cookie does not equal true
    console.log("auth succeded")
}  else {
    console.log("auth failed")
    window.location.href = "https://athleticscarnival.flareon.lol/login";
}

// shit dont work :skull:
// chatgpt failed me here
// TO-DO: fix this
