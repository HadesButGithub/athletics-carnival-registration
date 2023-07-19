function studentReportFlow() {
    var selectedOption = document.getElementById("studentSelect").value;
    var enrolledEvents = "Unknown";
    var age = "Unknown";

    if (selectedOption == "Mike Oxlong") {
        enrolledEvents = "100m Sprint, 200m Sprint, Relays";
        age = "16";
    } else if (selectedOption == "Dang Lin-Wang") {
        enrolledEvents = "Relays, Shotput";
        age = "17";
    }
    var studentData = document.getElementById("studentReport");
    studentData.innerHTML = "Name: " + selectedOption + "<br>Age: " + age + "<br>Enrolled Events: " + enrolledEvents + "<br>";
}