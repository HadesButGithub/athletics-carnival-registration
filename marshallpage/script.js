function getCookie() {
    var name = "user=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var cookie = ca[0].split('=');
    if (cookie[0] == name) {
        return cookie[1];
    }
    return "";
}

// NOTE 30/05/23 12:43pm - Attempting to use GitHub Copilot here