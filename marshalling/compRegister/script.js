function registerFlow() {
    var registerConfirmed = document.getElementById("registerConfirm"); // Sets var "registerConfirmed" to the "registerConfirm" paragraph in the HTML
    registerConfirmed.innerHTML = "Registration successful! You'll be redirected to the home page in 5 seconds."; // Displays confirmation message
    setTimeout(function () { // Redirects to the homepage after 5 seconds
        window.location.href = "/marshalling/marshallpage";
        }, 5000); // 5000ms -> 5s
    }