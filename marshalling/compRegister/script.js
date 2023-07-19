function registerFlow() {
    var registerConfirmed = document.getElementById("registerConfirm");
    registerConfirmed.innerHTML = "Registration successful! You'll be redirected to the home page in 5 seconds.";
    setTimeout(function () {
        window.location.href = "/marshalling/marshallpage";
        }, 5000);
    }